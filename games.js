let got = require('got')
let owl = require('./owl.js')
let scheduleUri = 'https://api.overwatchleague.com/schedule?locale=en_US'

exports.loadGamesFromApi = new Promise((resolve, reject) => {
  var results = []

  got(scheduleUri, { json: true }).then(response => {
    // Just want the regular season; skip preseason (0) and take stages 1-4
    let schedule = response.body.data.stages.slice(1, 4)
    
    schedule.forEach(stage => {
      stage.matches.forEach(match => {
        if (match.state === 'CONCLUDED') {
          results.push([winner(match), loser(match)])
        }
      })
    })

    resolve(results)
  }).catch(error => {
    reject(error.response.body)
  })
})

exports.addGamesToMatrix = function (results, matrix) {
  results.forEach(result => {
    matrix.addGame(id(result[0]), id(result[1]))
  })
}

function id (owlId) {
  return owl.teams.find((element) => {
    return element.owlId === owlId
  }).id
}

function winner (match) {
  return match.winner.id
}

function loser (match) {
  return (match.winner.id === match.competitors[0].id) ? match.competitors[1].id : match.competitors[0].id
}