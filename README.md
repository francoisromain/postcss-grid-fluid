# postcss-grid-fluid [![Build Status][ci-img]][ci]

A [PostCSS] plugin to create fluid grids.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/francoisromain/postcss-grid-fluid.svg
[ci]:      https://travis-ci.org/francoisromain/postcss-grid-fluid

* * * 

## Installation

Install the [npm module](https://www.npmjs.com/package/postcss-grid-system):

    $ npm install postcss-grid-fluid --save-dev

Require the PostCSS plugin:

``` js
postcss([ require('postcss-grid-fluid') ])
```

See [PostCSS usage](https://github.com/postcss/postcss#usage) to setup with Gulp, Grunt, Webpack, npm scripts… 

##### Example with a [npm script](https://docs.npmjs.com/misc/scripts) and [postcss-cli](https://www.npmjs.com/package/postcss-cli):

    $ npm install postcss-cli --save-dev

Add a script to package.json:

``` js
"scripts": {
  "build": "postcss -u postcss-grid-fluid -i src/styles.css -o dist/styles.css"
}
```

    $ npm run build

* * * 

## Configuration (optional)

Global settings rule (and default values):

``` css

@gf {
  width: 1,          /* width of one blob */
  gutter:  0,        /* width of the gutter */
  display: flex      /* float or flex */  
}
```

* * * 

## Usage

- [Rows](#rows)
- [Blobs](#blobs)

### Rows

`gf: row ([gutter])`

Rows are intended to contain a _blob_. They have a negative right margin.

- _gutter_: width of the gutter in `px` or `rem`.

``` css

.my-row {
  gf: row 1.5rem;
}

```

### Blobs

`gf: blob [width](/[total]) ([gutter]) ([display])`

- _width_: width of the blob. Could be an integer if there is a _total_ or an float. 
- _total_ (optional): divider of the container width.
- _gutter_: width of the gutter in `px` or `rem`.
- _display_: `float` or `flex`.

``` css

.my-blob {
  gf: blob 0.75;
}

.my-blob-with-offset {
  gf: blob 3/4 1.5rem float;
}

```
