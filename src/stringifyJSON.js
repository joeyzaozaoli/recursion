// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var type = typeof(obj);

  if (type === 'number' || type === 'boolean' || obj === null) {
    return `${obj}`;
  } else if (type === 'string') {
    return `"${obj}"`;
  }

  if (obj.constructor === Array) {
    // create a string to represent result
    var result = '[';

    // for each primitive value in array
    var length = obj.length;
    for (var i = 0; i < length; i++) {
      // call above function and concat what is returned from function to result string
      if (i !== length-1) {
        result += `${stringifyJSON(obj[i])},`;
      } else {
        result += stringifyJSON(obj[i]);
      }
    }

    // concat result string with ']'
    result += ']';
    // return result string
    return result;
  }

  if (obj.constructor === Object) {
    // create a string to represent result
    var result = '{';

    // for each key-value pair in object
    for (var key in obj) {
      var value = obj[key];
      if (value === undefined) {
        return '{}';
      } else {
        // call above function and concat what is returned from function to result string
        result += `${stringifyJSON(key)}:${stringifyJSON(value)},`;
      }
    }

    // remove last comma
    result = result.replace(/,$/, '');
    // concat result string with '}'
    result += '}';
    // return result string
    return result;
  }
};