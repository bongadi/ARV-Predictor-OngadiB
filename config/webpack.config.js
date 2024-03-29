/**
 * Created by Jm on 8/3/2017.
 */

var path = require('path');

module.exports = {
  entry: [
    path.normalize('es6-shim/es6-shim.min'),
    'reflect-metadata',
    'web-animations.min',
    path.normalize('zone.js/dist/zone-microtask'),
    path.resolve('app/app')
  ],
  output: {
    path: path.resolve('www/build/js'),
    filename: 'app.bundle.js',
    pathinfo: false // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'awesome-typescript',
        query: {
          doTypeCheck: false,
          useWebpackText: true
        },
        include: path.resolve('app'),
        exclude: /node_modules/
      },{
        test: /\.css/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        include: path.resolve('node_modules/angular2'),
        loader: 'strip-sourcemap'
      }
    ],
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      /web-animations/,
      /zone\.js(\/|\\)dist(\/|\\)zone-microtask/
    ]
  },
  resolve: {
    alias: {
      'angular2': path.resolve('node_modules/angular2'),
      'ionic': 'ionic-framework',
      'web-animations.min': path.normalize('ionic-framework/js/web-animations.min')
    },
    extensions: ['', '.js']
  }
};
