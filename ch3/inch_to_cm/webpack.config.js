const path = require('path')
const basedir = __dirname

module.exports = {
  entry: path.join(basedir, 'src/index.js'),
  output: {
    path: path.join(basedir, 'out'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets:['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
}
