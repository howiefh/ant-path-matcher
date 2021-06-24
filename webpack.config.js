const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ant-path-matcher.js',
    globalObject: 'this',
    library: {
      name: 'AntPathMatcher',
      type: 'umd',
      export: 'default'
    }
  },
};