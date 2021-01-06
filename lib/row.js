"use strict";

const row = (node, gutter, display, {
  decl,
  rule
}) => {
  const clearfixRule = rule({
    selector: `${node.parent.selector}::after`
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
  node.parent.after(clearfixRule);
  let nodeNew = [decl({
    prop: 'clear',
    value: 'both'
  })];

  if (gutter !== '0') {
    nodeNew = nodeNew.concat([decl({
      prop: 'margin-right',
      value: `calc(-1 * ${gutter})`
    })]);
  }

  if (display === 'flex') {
    nodeNew = nodeNew.concat([decl({
      prop: 'display',
      value: 'flex'
    }), decl({
      prop: 'flex-flow',
      value: 'row wrap'
    }), decl({
      prop: 'align-items',
      value: 'flex-start'
    }), decl({
      prop: 'align-content',
      value: 'flex-start'
    })]);
  }

  node.replaceWith(nodeNew);
};

module.exports = row;