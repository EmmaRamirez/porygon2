const path = require('path');

module.exports = {
  "stories": [
    "../core/**/*.stories.mdx",
    "../core/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
		config.resolve.modules.push(path.resolve(__dirname, '../core'));
		return config;
	},
}