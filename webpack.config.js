const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ant-path-matcher.js',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    library: {
      name: 'AntPathMatcher',
      type: 'umd',
      export: 'default'
    }
  },
  plugins: [ 
    new CopyWebpackPlugin({
      patterns: [{
        from: path.join(__dirname, "./src/index.d.ts"),
        to: path.join(__dirname, "./dist/ant-path-matcher.d.ts")
      }]
    })  
  ]
};