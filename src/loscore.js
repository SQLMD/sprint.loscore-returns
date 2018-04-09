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
    let uniqArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!uniqArray.includes(array[i])) {
        uniqArray.push(array[i]);
      }
    }
    return uniqArray;
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
    let result = [];
    _.each(collection, (item, key, collection) => {
      result.push(iteratee(item, key, collection));
    });
    return result;
  };

  _.filter = (collection, test) => {
    const result = [];
    _.each(collection, (val) => test(val) && result.push(val));
    return result;
  };

  _.reject = (collection, test) => {
    return _.filter(collection, (value) => {
      if (test(value)) {
        return false;
      }
      return true;
    });
  };

  _.reduce = (collection, iterator, accumulator) => {
    // YOUR CODE HERE
    let newCollection = collection;
    let result;
    if (accumulator == undefined) {
      [result, ...newCollection] = newCollection;
    } else {
      result = accumulator;
    }
    _.each(newCollection, (item) => {
      result = iterator(result, item);
    });
    return result;
  };

  _.every = function(collection, test) {
    // YOUR CODE
    if (test == undefined || collection.length == 0) {
      return true;
    }
    let result = _.reduce(collection, (accumlator, current) => {
      if (accumlator && test(current)) {
        return true;
      } else {
        return false;
      }
    });
    return result;
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */

  _.extend = function() {
    // YOUR CODE HERE
    let obj, objs;
    [obj, ...objs] = arguments;
    _.each(objs, (objToExtend) => {
      _.each(objToExtend, (item, key) => {
        obj[key] = item;
      });
    });

    return obj;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  _.once = function(func) {
    // YOUR CODE HERE
    let check = true;
    const once = () => {
      if (check) {
        func();
      }
      check = false;
    };
    return once;
  };

  _.memoize = function(func) {
    // YOUR CODE HERE
    let cache = {};
    const cachedFunc = (...args) => {
      const strArgs = JSON.stringify(...args);
      if (!cache.hasOwnProperty(strArgs)) {
        cache[strArgs] = func(...args);
      }
      return cache[strArgs];
    };
    return cachedFunc;
  };

  _.invoke = function(collection, functionOrKey) {
    // YOUR CODE HERE

    if (typeof functionOrKey == "function") {
      return _.map(collection, (item) => functionOrKey.apply(item));
    }
    return _.map(collection, (item) => item[functionOrKey].apply(item));
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
