var curry = require('lodash').curry;
var Maybe = require('../');

var l = console.log;
var add = curry(function(a, b){ return a + b });
var map = curry(function(func, collection){
  return collection.map(func);
});




// Psuedo Tests

l(Maybe.is_nothing(Maybe(2)));
l(Maybe.is_just(Maybe(false)));
l(Maybe.from_maybe('foo', Maybe(2)), Maybe.from_maybe(55, Maybe(null)));
l(Maybe(2).from_maybe('foobar'), Maybe(null).from_maybe('foobar'))

Maybe(null).maybe(4, l);
Maybe.maybe(4, l, Maybe(null));


// Trying map

l(map(add(1), Maybe(5)));
l(map(add(1), Maybe()).is_nothing());