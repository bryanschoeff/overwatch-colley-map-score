let leftPad = require('left-pad')

let owl = require('./owl.js')

let description = function (team) {
  let division = leftPad('[' + team.division + '] ', 11)
  return division + team.name
}

let assignScoreToTeam = function (element, index) {
  return [description(owl.teams[index]), element]
}

let decreasingScores = function (a, b) {
  return b[1] - a[1]
}

let printRank = function (element, index) {
  let rank = leftPad(index + 1, 2)
  console.log(rank + ' ' + element[0] + ' (' + element[1] + ')')
}

exports.print = function (scores) {
  scores.array
    .map(assignScoreToTeam)
    .sort(decreasingScores)
    .forEach(printRank)
}
