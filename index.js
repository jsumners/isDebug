'use strict';

var env = process.env.NODE_ENV;
var debug = process.env.DEBUG;

exports = module.exports = (function() {
  if (!env && !debug) {
    return false;
  }

  if (debug) {
    return true;
  }

  var _env = env.substring(0, 3).toUpperCase();
  if (_env === 'DEV' || _env === 'DEB') {
    return true;
  }

  return false;
}());