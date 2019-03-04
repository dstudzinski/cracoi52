module.exports = {
  babel: {
    // presets: [],
    // plugins: [],
    loaderOptions: { /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */ },
    // loaderOptions: (babelLoaderOptions, { env, paths }) => { return babelLoaderOptions; }
  },
  jest: {
    babel: {
      addPresets: true, // (default value)
      addPlugins: true  // (default value)
    },
    configure: { /* Any Jest configuration options: https://jestjs.io/docs/en/configuration. */ },
    // configure: (jestConfig, { env, paths, resolve, rootDir }) => { return jestConfig; }
  },
};
