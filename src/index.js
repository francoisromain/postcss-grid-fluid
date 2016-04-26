import postcss from 'postcss';
import row from './row';
import blob from './blob';

module.exports = postcss.plugin('postcss-grid-fluid', (opts) => {
  const options = {
    gutter: '0',
    display: 'flex',
    width: '1',
  };

  Object.assign(options, opts);

  return (css) => {
    css.walk((node) => {
      if (node.type === 'atrule' && node.name.match(/^gf$/)) {
        node.walkDecls((decl) => {
          if (decl.prop.match(/^gutter/) ||
              decl.prop.match(/^display/) ||
              decl.prop.match(/^width/)) {
            options[decl.prop] = decl.value;
          }
        });
        node.remove();
      } else if (node.type === 'decl' && node.prop.match(/^gf$/)) {
        const value = node.value.split(/\s+(?![^\[]*\]|[^(]*\)|[^\{]*})/);
        if (value[0] === 'row') {
          value[1] = value[1] || options.gutter;
          value[2] = value[2] || options.display;
          row(node, value[1], value[2]);
        } else if (value[0] === 'blob') {
          value[1] = value[1] || options.width;
          value[2] = value[2] || options.gutter;
          value[3] = value[3] || options.display;
          blob(node, value[1], value[2], value[3]);
        }
      }
    });
  };
});
