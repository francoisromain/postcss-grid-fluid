'use strict';

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _blob = require('./blob');

var _blob2 = _interopRequireDefault(_blob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _postcss2.default.plugin('postcss-grid-fluid', function (opts) {
  var options = {
    gutter: '0',
    display: 'flex',
    width: '1'
  };

  Object.assign(options, opts);

  return function (css) {
    css.walk(function (node) {
      if (node.type === 'atrule' && node.name.match(/^gf$/)) {
        node.walkDecls(function (decl) {
          if (decl.prop.match(/^gutter/) || decl.prop.match(/^display/) || decl.prop.match(/^width/)) {
            options[decl.prop] = decl.value;
          }
        });
        node.remove();
      } else if (node.type === 'decl' && node.prop.match(/^gf$/)) {
        var value = node.value.split(/\s+(?![^[]*\]|[^(]*\)|[^{]*})/);
        if (value[0] === 'row') {
          value[1] = value[1] || options.gutter;
          value[2] = value[2] || options.display;
          (0, _row2.default)(node, value[1], value[2]);
        } else if (value[0] === 'blob') {
          value[1] = value[1] || options.width;
          value[2] = value[2] || options.gutter;
          value[3] = value[3] || options.display;
          (0, _blob2.default)(node, value[1], value[2], value[3]);
        }
      }
    });
  };
});