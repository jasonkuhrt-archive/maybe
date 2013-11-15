var api = module.exports = {};

api.maybe = function(else_value, f, m){
  return f(api.is_nothing(m) ? else_value : api.from_just(m));
};

api.is_nothing = function(m){
  return m._is_nothing;
};

api.is_just = function(m){
  return !m._is_nothing;
};

api.from_just = function(m){
  if (api.is_nothing(m)) throw new Error('Cannot get a value from Nothing.');
  return m._value;
};

api.from_maybe = function(else_value, m){
  return api.is_just(m) ? api.from_just(m) : else_value ;
};