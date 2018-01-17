import test from 'ava'
import td from 'testdouble'

let printer = require('../printer')

test.beforeEach(t => {
  td.replace(console, 'log')
})

test.afterEach(t => {
  td.reset()
})

test('print', t => {
  let scores = {
    array: [42, 12]
  }

  printer.print(scores)

  td.verify(console.log(td.matchers.anything()), { times: 2 })
  td.verify(console.log(' 1  [Pacific] Dallas Fuel (42)'))
  td.verify(console.log(' 2  [Pacific] Los Angeles Gladiators (12)'))

  t.pass()
})
