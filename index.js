'use strict';

var uglify = require('uglify-js');

module.exports = function(source) {
  return 'module.exports = "javascript:' + encodeURIComponent(
    '(function(){'+ uglify.minify(source, { fromString: true }).code +'})();'
  ) + '"';
};
