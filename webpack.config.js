const webpack = require('webpack')

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'cheap-module-source-map' : 'eval',
  module: {
  loaders: [
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": [
          "es2015",
          "react",
          "stage-0"
        ]
      }
    }
  ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ]
}

