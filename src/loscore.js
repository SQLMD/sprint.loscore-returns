(() => {
  // Let's make an object and start adding methods to it!
  window._ = {
    identity: (val) => val,
  };

  /**
  | ARRAYS
  |~~~~~~~~~~
  * */

  _.uniq = (array) => {
    // YOUR CODE HERE
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  * */

  _.each = (collection, iterator) => {
    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i += 1) {
        iterator(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i += 1) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  };

  _.map = (collection, iteratee) => {
    // YOUR CODE HERE
  };

  _.filter = (collection, test) => {
    const result = [];
    _.each(collection, (val) => test(val) && result.push(val));
    return result;
  };

  _.reject = (collection, test) => {};

  _.reduce = (collection, iterator, accumulator) => {
    // YOUR CODE HERE
  };

  _.every = function(/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */

  _.extend = function(obj) {
    // YOUR CODE HERE
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  _.once = function(func) {
    // YOUR CODE HERE
  };

  _.memoize = function(func) {
    // YOUR CODE HERE
  };

  _.invoke = function(collection, functionOrKey) {
    // YOUR CODE HERE
  };

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  * */

  _.sortBy = function(/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.zip = function() {
    // YOUR CODE HREE
  };

  _.delay = function(/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.defaults = function(/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.throttle = function(/* Your Arguments Here */) {
    // YOUR CODE HERE
  };
})();