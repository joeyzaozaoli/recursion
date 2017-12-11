// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // create an empty array to store elements
  var elements = [];

  // given a node
  var find = function(node) {
    // if node has target class name
    if (node.classList && node.classList.contains(className)) {
      // push node to elements array
      elements.push(node);
    }
    // if node has children
    if (node.children.length > 0) {
      // for node's each child
      for (var child of node.children) {
        // call above function by passing in child
        find(child);
      }
    }
  };

  // initiate recursion by passing in document to above function
  find(document);

  // return elements array
  return elements;
};