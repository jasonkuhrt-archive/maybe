
module.exports = MONAD;

// 3 Axioms of Monadness
//
// 1. Left Identity:  bind(unit(x), f) === f(x)
// 2. Right Identity: bind(monad, unit) === monad
// 3. Associativity:  bind(bind(monad, f), g) === bind(monad, (x)-> bind(f(x), g))

// Monad macroid

function MONAD(mutator){

  // unit :: a -> m a
  // Convert a non-monadic value into a monadic value
  function unit(value){
    var monad = Object.create(null);

    // Default bind function
    monad.bind = function(func, args){
      return MONAD.lift_m(unit, func).apply(null, [value].concat(Array.prototype.slice.apply(args || [])));
    };

    //maybef(mutator)(monad, value);
    if (mutator) mutator(monad, value);

    return monad;
  }

  return unit;
}



// Make non-monadic functions return monadic values
MONAD.lift_m = function(unit, func){
  return function(){
    return unit(func.apply(null, Array.prototype.slice.apply(arguments)));
  }
};