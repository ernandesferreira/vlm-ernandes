module.exports  = {
  entry: './src/index.jsx',
  output: {
      path: __dirname + '/public',
      filename: './bundle.js'
  },
  devServer: {
      port: 3333,
      contentBase: './public',
  },
  module: {
      loaders: [{
          test: /\.js[x]?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              presets: ['es2015', 'react'],
          }
      }]
  }
}