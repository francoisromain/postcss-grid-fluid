"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _postcss = _interopRequireDefault(require("postcss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (decl, ratio, gutter, display) => {
  const width = ratio.split('/');
  let widthValue;
  let widthString;
  let declNew = [];

  if (width[1]) {
    widthValue = 100 * width[0] / width[1];
  } else {
    widthValue = 100 * width[0];
  }

  if (widthValue > 100) {
    widthValue = 100;
  }

  if (gutter === '0') {
    widthString = `${widthValue}%`;
  } else {
    widthString = `calc(${widthValue}% - ${gutter})`;
    declNew = declNew.concat([_postcss.default.decl({
      prop: 'margin-right',
      value: gutter
    })]);
  }

  if (display === 'flex') {
    declNew = declNew.concat([_postcss.default.decl({
      prop: 'flex',
      value: `0 1 ${widthString}`
    })]);
  } else if (display === 'float') {
    declNew = declNew.concat([_postcss.default.decl({
      prop: 'width',
      value: `${widthString}`
    }), _postcss.default.decl({
      prop: 'float',
      value: 'left'
    })]);
  }

  decl.replaceWith(declNew);
};

exports.default = _default;