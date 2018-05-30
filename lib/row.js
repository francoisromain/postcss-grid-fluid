"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _postcss = _interopRequireDefault(require("postcss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (decl, gutter, display) => {
  const clearfixRule = _postcss.default.rule({
    selector: `${decl.parent.selector}::after`
  });

  clearfixRule.append({
    prop: 'content',
    value: '""'
  });
  clearfixRule.append({
    prop: 'display',
    value: 'table'
  });
  clearfixRule.append({
    prop: 'clear',
    value: 'both'
  });
  decl.parent.after(clearfixRule);
  let declNew = [_postcss.default.decl({
    prop: 'clear',
    value: 'both'
  })];

  if (gutter !== '0') {
    declNew = declNew.concat([_postcss.default.decl({
      prop: 'margin-right',
      value: `calc(-1 * ${gutter})`
    })]);
  }

  if (display === 'flex') {
    declNew = declNew.concat([_postcss.default.decl({
      prop: 'display',
      value: 'flex'
    }), _postcss.default.decl({
      prop: 'flex-flow',
      value: 'row wrap'
    }), _postcss.default.decl({
      prop: 'align-items',
      value: 'flex-start'
    }), _postcss.default.decl({
      prop: 'align-content',
      value: 'flex-start'
    })]);
  }

  decl.replaceWith(declNew);
};

exports.default = _default;