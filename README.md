# postcss-grid-fluid

[![npm version][npm-img]][npm] [![Build Status][ci-img]][ci] [![Dependency Status][dep-img]][dep]

[francoisromain.github.io/postcss-grid-fluid](http://francoisromain.github.io/postcss-grid-fluid)

A [PostCSS] plugin to create fluid grids.

[github.io]: http://francoisromain.github.io/postcss-grid-fluid
[PostCSS]:   https://github.com/postcss/postcss
[ci-img]:    https://travis-ci.org/francoisromain/postcss-grid-fluid.svg
[ci]:        https://travis-ci.org/francoisromain/postcss-grid-fluid
[npm-img]:   https://badge.fury.io/js/postcss-grid-fluid.svg
[npm]:       https://badge.fury.io/js/postcss-grid-fluid
[dep-img]:   https://david-dm.org/francoisromain/postcss-grid-fluid.svg
[dep]:       https://david-dm.org/francoisromain/postcss-grid-fluid

* * * 

## Installation

Install the [npm package](https://www.npmjs.com/package/postcss-grid-fluid):

    $ npm install postcss-grid-fluid --save-dev

Require the PostCSS plugin:

``` js
postcss([ require('postcss-grid-fluid') ])
```

See [PostCSS docs](https://github.com/postcss/postcss#usage) to setup with Gulp, Grunt, Webpack, npm scripts… 

* * * 

## Configuration (optional)

Global settings rule (and default values):

``` css
@gf {
  width: 1;         /* width/total of one blob */
  gutter: 0;        /* width of the gutter */
  display: flex;    /* float or flex */  
}
```

* * * 

## Usage

### Rows

`gf: row ([gutter])`

- _gutter_ (optional, default = 0): width of the gutter in `px` or `rem`.

Rows are intended to contain a _blob_. They have a negative right margin.

### Blobs

`gf: blob [width](/[total]) ([gutter]) ([display])`

- _width_: width of the blob. Could be an integer if there is a _total_ or a float smaller than 1. 
- _total_ (optional, default = 1): divider of the container width.
- _gutter_ (optional, default = 0): width of the gutter in `px` or `rem`.
- _display_ (optional, default = `flex`): `float` or `flex`.

Example 1: [input](https://github.com/francoisromain/postcss-grid-fluid/blob/gh-pages/test/src/01.css), [output](https://github.com/francoisromain/postcss-grid-fluid/blob/gh-pages/test/dist/01.css), [markup](https://github.com/francoisromain/postcss-grid-fluid/blob/gh-pages/test/01.html), [demo](http://localhost/francoisromain.github.io/postcss-grid-fluid/test/01.html)

Example 2: [input](https://githubcom/francoisromain/postcss-grid-fluid/blob/gh-pages/test/src/02.css), [output](https://github.comfrancoisromain/postcss-grid-fluid/blob/gh-pages/test/dist/02.css), [markup](https://ithub.com/francoisromain/postcss-grid-fluid/blob/gh-pages/test/02.html), [demo](http://localhost/francoisromain.github.io/postcss-grid-fluid/test/02.html)