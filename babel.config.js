module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx'],
          alias: {
            '@app': './src',
            '@redux': './src/redux',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@components': './src/components'
          }
        }
      ]
    ]
  };
};
