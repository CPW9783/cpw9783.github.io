const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  config.plugins.push(new CaseSensitivePathsPlugin());

  actions.replaceWebpackConfig(config);
};
