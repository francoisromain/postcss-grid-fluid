import postcss from 'postcss';

export default (decl, ratio, gutter, display) => {
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
    declNew = declNew.concat([
      postcss.decl({ prop: 'margin-right', value: gutter }),
      postcss.decl({ prop: 'margin-bottom', value: gutter }),
    ]);
  }

  if (display === 'flex') {
    declNew = declNew.concat([
      postcss.decl({ prop: 'flex', value: `0 1 ${widthString}` }),
    ]);
  } else if (display === 'float') {
    declNew = declNew.concat([
      postcss.decl({ prop: 'width', value: `${widthString}` }),
      postcss.decl({ prop: 'float', value: 'left' }),
    ]);
  }

  decl.replaceWith(declNew);
};
