const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'src/scripts'),
    build: path.join(__dirname, 'build/assets/scripts')
};

const config = {
    entry: {
        'index': PATHS.source + '/pages/index.js',
        'blog': PATHS.source + '/pages/blog.js',
        'about': PATHS.source + '/pages/about.js',
        'my-work': PATHS.source + '/pages/my-work.js',
        'svg4everybody': PATHS.source + '/svg4everybody.js'
    },
    output: {
        filename: './js/[name].js'
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}
		}]
	}
};

module.exports = config;