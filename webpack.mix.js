const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
		resolve: {
			alias: {
				jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
				jQuery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js')
			},
		},
		devtool: 'inline-source-map'
	})
	// General Assets
	.sass('resources/scss/common.scss', 'public/css/')

	.sass('resources/scss/app.scss', 'public/css/general.css')
	.js('resources/js/app.js', 'public/js/general.js')

	// Module Assets - JS
	.js('resources/js/modules/inputmask.js', 'public/js/modules')
	.js('resources/js/modules/animations.js', 'public/js/modules')

	// Module Assets - SASS
	.sass('resources/scss/modules/animations.scss', 'public/css/modules')

	// Utility Assets - JS
	.js('resources/js/util/disable-on-submit.js', 'public/js/util')

	// Individual Pages
	.js('resources/js/login.js', 'public/js')
	.sass('resources/scss/login.scss', 'public/css')

	// Final Configurations
	.sourceMaps()
	.disableNotifications();