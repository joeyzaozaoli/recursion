// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (obj === null || typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    return obj + '';
  } else if (typeof(obj) === 'string') {
  	return '"' + obj + '"'
  }

  if (Array.isArray(obj)) {
  	
    for (var i = 0, str = '['; i < obj.length; i++) {
  	  if (obj[i] === undefined || typeof(obj[i]) === 'function') {
  	  	return '[]';
  	  }
      str += stringifyJSON(obj[i]) + ','
  	}
  	return str.replace(/,$/, '') + ']'; 

  } else if (typeof(obj) === 'object') {

    var arr = Object.keys(obj);

    for (var i = 0, str = '{'; i < arr.length; i++) {
      if (obj[arr[i]] === undefined || typeof(obj[arr[i]]) === 'function') {
        return '{}';
      }
      str += stringifyJSON(arr[i]) + ':' + stringifyJSON(obj[arr[i]]) + ','
    }
    return str.replace(/,$/, '') + '}';
    
  }
};