'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (decl, gutter, display) {
  var clearfixRule = _postcss2.default.rule({ selector: decl.parent.selector + '::after' });
  clearfixRule.append({ prop: 'content', value: '""' });
  clearfixRule.append({ prop: 'display', value: 'table' });
  clearfixRule.append({ prop: 'clear', value: 'both' });
  clearfixRule.moveAfter(decl.parent);

  var declNew = [_postcss2.default.decl({ prop: 'clear', value: 'both' })];

  if (gutter !== '0') {
    declNew = declNew.concat([_postcss2.default.decl({ prop: 'margin-right', value: '-' + gutter })]);
  }

  if (display === 'flex') {
    declNew = declNew.concat([_postcss2.default.decl({ prop: 'display', value: 'flex' }), _postcss2.default.decl({ prop: 'flex-flow', value: 'row wrap' }), _postcss2.default.decl({ prop: 'align-items', value: 'flex-start' }), _postcss2.default.decl({ prop: 'align-content', value: 'flex-start' })]);
  }

  decl.replaceWith(declNew);
};