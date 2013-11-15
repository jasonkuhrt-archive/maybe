var Maybe = require('../');

// Psuedo Tests

console.log(Maybe.is_nothing(Maybe(2)));
console.log(Maybe.is_just(Maybe(false)));
console.log(Maybe.from_maybe('foo', Maybe(2)), Maybe.from_maybe(55, Maybe(null)));
console.log(Maybe(2).from_maybe('foobar'), Maybe(null).from_maybe('foobar'))
Maybe(null).maybe(4, console.log);
Maybe.maybe(4, console.log, Maybe(null));