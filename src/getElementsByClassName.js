// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var els = [];
  var el = document;

  var findByClassName = function(els, el, className) {
	  for (var i = 0; i < el.childNodes.length; i++) {
	    if (el.childNodes[i].classList && el.childNodes[i].classList.contains(className)) {
	      els.push(el.childNodes[i]);
	    }
	    if (el.childNodes[i].childNodes[0]) {
	      findByClassName(els, el.childNodes[i], className);	
	    }
	  }
  };

  findByClassName(els, el, className);
  return els;
};