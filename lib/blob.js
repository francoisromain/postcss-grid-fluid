'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (decl, ratio, gutter, display) {
  var width = ratio.split('/');
  var widthValue = void 0;
  var widthString = void 0;
  var declNew = [];
  if (width[1]) {
    widthValue = 100 * width[0] / width[1];
  } else {
    widthValue = 100 * width[0];
  }

  if (widthValue > 100) {
    widthValue = 100;
  }

  if (gutter === '0') {
    widthString = widthValue + '%';
  } else {
    widthString = 'calc(' + widthValue + '% - ' + gutter + ')';
    declNew = declNew.concat([_postcss2.default.decl({ prop: 'margin-right', value: gutter }), _postcss2.default.decl({ prop: 'margin-bottom', value: gutter })]);
  }

  if (display === 'flex') {
    declNew = declNew.concat([_postcss2.default.decl({ prop: 'flex', value: '0 1 ' + widthString })]);
  } else if (display === 'float') {
    declNew = declNew.concat([_postcss2.default.decl({ prop: 'width', value: '' + widthString }), _postcss2.default.decl({ prop: 'float', value: 'left' })]);
  }

  decl.replaceWith(declNew);
};