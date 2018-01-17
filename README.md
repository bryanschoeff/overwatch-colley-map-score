# Overwatch Colley - Map Score

A slightly divergent version of [Overwatch Colley](https://github.com/DarthStrom/overwatch-colley) where we get a listing of the Overwatch League team rankings as calculated by the Colley Matrix method using map results rather than overall results.

## How?

1) Run `npm install` to install dependencies
1) Add entries for known games in `games.js` like `C.addGame(owl.winner, owl.loser)`
1) Run `node index.js` to calculate and print out the rankings

## Running the tests

1) Run `npm install` to install dependencies
1) Run `npm test` to run all tests once, or `npm test -- --watch` to run all tests when files change
