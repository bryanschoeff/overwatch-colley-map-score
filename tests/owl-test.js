import test from 'ava'

let owl = require('../owl')

test('teams', t => {
  t.is(owl.fuel, owl.teams[owl.fuel].id)
  t.is(owl.gladiators, owl.teams[owl.gladiators].id)
  t.is(owl.valiant, owl.teams[owl.valiant].id)
  t.is(owl.shock, owl.teams[owl.shock].id)
  t.is(owl.dynasty, owl.teams[owl.dynasty].id)
  t.is(owl.dragons, owl.teams[owl.dragons].id)
  t.is(owl.uprising, owl.teams[owl.uprising].id)
  t.is(owl.outlaws, owl.teams[owl.outlaws].id)
  t.is(owl.spitfire, owl.teams[owl.spitfire].id)
  t.is(owl.mayhem, owl.teams[owl.mayhem].id)
  t.is(owl.excelsior, owl.teams[owl.excelsior].id)
  t.is(owl.fusion, owl.teams[owl.fusion].id)
})
