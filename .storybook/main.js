const path = require('path');

module.exports = {
	addons: [
		{
			name: '@storybook/addon-docs',
			options: {
				configureJSX: true,
			},
		},
		'@storybook/addon-actions/register',
		'@storybook/addon-links/register',
		'@storybook/addon-knobs/register',
	],
	stories: ['../**/**/*.stories.@(js|jsx|mdx|ts|tsx)'],
	webpackFinal: async (config) => {
		config.resolve.modules.push(path.resolve(__dirname, '../core'));
		return config;
	},
};