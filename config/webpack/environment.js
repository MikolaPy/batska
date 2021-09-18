const { environment } = require('@rails/webpacker')

//
// PATH 
//
const path = require('path');
const customConfig = { 
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "..","..","app/javascript/src")
		}
	}
}

environment.config.merge(customConfig)

const { VueLoaderPlugin } = require('vue-loader');
const vue = require('./loaders/vue') ;
environment.plugins.prepend(
	'VueLoaderPlugin',
	new VueLoaderPlugin()
)

const { DefinePlugin } = require('webpack');
environment.plugins.prepend(
	'Define',
	new DefinePlugin({
		__VUE_OPTIONS_API__: false,
		// __VUE_OPTIONS_API__: true,
		__VUE_PROD_DEVTOOLS__: false
	})
)

environment.loaders.prepend('vue',vue)

module.exports = environment
