# Bookmarklet loader for [webpack](http://webpack.github.io/)

bookmarklet-loader is a webpack loader that will convert any javascript file into a bookmarklet that can be used as a module throughout your application.

## Install

`npm install bookmarklet-loader webpack --save-dev`

The bookmarklet-loader requires [webpack](https://github.com/webpack/webpack)
as [`peerDependency`](https://docs.npmjs.com/files/package.json#peerdependencies).

## Usage

### Apply via webpack config

``` javascript
module.exports = {
  ...
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['bookmarklet-loader'],
        include: path.join(__dirname, 'app/bookmarklets')
      }
    ]
  }
};
```

### Import into your application

``` javascript
import bookmarklet from 'app/bookmarklets/bookmarklet';

// via JSX
return (
  <a href={bookmarklet}>
    Click me, I am a bookmarklet.
  </a>
);

// via vanilla JS
let link = document.createElement('a');
    link.href = bookmarklet;
    link.innerHTML = 'Click me, I am a bookmaklet';
return link;
```
