var _ = require('lodash');
var MONAD = require('./lib/monad-macroid');
var api = require('./api');

// Helpers

var from_maybe = api.from_maybe;
var from_just = api.from_just;
var is_just = api.is_just;
var is_nothing = api.is_nothing;

var partial_right = _.partialRight;
var merge = _.merge;
var extend = _.extend;
var transform = _.transform;

function exists(maybe_something){
  return maybe_something !== undefined && maybe_something !== null
}

function map_object(obj, f){
  return transform(obj, function(obj_, value, key){
    obj_[key] = f(value, key);
  }, {});
}



// Maybe

var Maybe = module.exports = MONAD(function(monad, value){
  // Private fields are used by Maybe.* functions
  monad._value = value;
  monad._is_nothing = !exists(value);

  // Maybe has a map implementation because it is a Monad and all Monads are Functors.
  monad.map = function(func){
    return is_just(monad) ? Maybe(func(from_just(monad))) : monad ;
  }

  // When Maybe's Just a is Nothing
  // Then Maybe.bind simply returns the monad
  // without applying the passed function
  if (is_nothing(monad)){
    monad.bind = function(ignored_function){
      return monad;
    };
  }

  // Merge a partially-applied copy of the API
  merge(monad, map_object(api, function(f, fname){ return partial_right(f, monad); }));
});


// Expose API on constructor object
extend(Maybe, api);