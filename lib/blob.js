"use strict";

const blob = (node, ratio, gutter, display, {
  decl
}) => {
  const width = ratio.split('/');
  let widthValue;
  let widthString;
  let nodeNew = [];

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
    nodeNew = nodeNew.concat([decl({
      prop: 'margin-right',
      value: gutter
    })]);
  }

  if (display === 'flex') {
    nodeNew = nodeNew.concat([decl({
      prop: 'flex',
      value: `0 1 ${widthString}`
    })]);
  } else if (display === 'float') {
    nodeNew = nodeNew.concat([decl({
      prop: 'width',
      value: `${widthString}`
    }), decl({
      prop: 'float',
      value: 'left'
    })]);
  }

  node.replaceWith(nodeNew);
};

module.exports = blob;