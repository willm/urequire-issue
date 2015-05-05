'use strict';
var config = {
	bundle: {
		path: './scripts',
		name: 'urequire testing',
		filez: ['**/*.js'],
		main: 'main.js',
	},
	build: {
		dstPath: './build',
		template: 'UMD',
		verbose: true,
		debugLevel: 30,
		globalWindow: true
	}
};
module.exports = config;
