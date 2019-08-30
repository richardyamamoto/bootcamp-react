const path = require('path')
module.exports={
  // Entry file
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // Bundle
  output: {
    // Directory for bundle 
    path: path.resolve(__dirname, 'public'),
    // Output file name
    filename: 'bundle.js'
  },
  // webpack-dev-server config
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        // Regular expression /<expression>/
        // \ : means to read point
        // $ : means the expression must end with
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // Add every new loader
          loader: 'babel-loader'
        },
      },
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: [
          // Import css file
          {loader: 'style-loader'},
          // Imports inside css files
          {loader: 'css-loader'},
        ]
      },
      {
        // | : or
        // ? : the letter before could exists or not
        // i : insensitive .GIF or .gif works
        test: /.\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }
}