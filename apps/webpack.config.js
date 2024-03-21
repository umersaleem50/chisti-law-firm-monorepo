const { composePlugins, withNx } = require('@nx/webpack');
const path = require('path');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.resolve = {
    modules: ['node_modules', path.join(__dirname, `/frontend/utils/mixins`)],
  };
  return config;
});
