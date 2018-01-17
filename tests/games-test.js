import test from 'ava'
import td from 'testdouble'

var games, got, matrix

test.beforeEach(t => {
  got = td.replace('got')
  td.when(got(td.matchers.anything(), td.matchers.anything())).thenResolve(testApiResponse)

  games = require('../games')

  matrix = {
    addGame: td.function()
  }
})

test.afterEach(t => {
  td.reset
})

test('loadGamesFromApi', t => {
  return games.loadGamesFromApi.then((result) => {
    t.is(result.length, 2)
    t.deepEqual(result, [[ 4523, 4406 ], [ 4406, 4405 ]])
  })
})

test('addGamesToMatrix', t => {
  let gameResults = [[ 4523, 4406 ], [ 4406, 4405 ]]

  games.addGamesToMatrix(gameResults, matrix)

  td.verify(matrix.addGame(td.matchers.isA(Number), td.matchers.isA(Number)), { times: 2 })
  t.pass()
})

let testApiResponse = {
  body: {
    data: {
      stages: [
        {},
        {
          matches: [
            {
              competitors: [
                { id: 4523 },
                { id: 4406 }
              ],
              state: 'CONCLUDED',
              winner: { id: 4523 }
            },
            {
              competitors: [
                { id: 4405 },
                { id: 4406 }
              ],
              state: 'CONCLUDED',
              winner: { id: 4406 }
            }
          ]
        },
        { matches: [] },
        { matches: [] },
        { matches: [] }
      ]
    }
  }
}
