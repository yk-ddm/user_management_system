const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: [ "style-loader", "css-loader" ] },
            {test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader'},
            { test: /\.scss$/, use: [ "style-loader", "sass-loader", "css-loader" ] },
            { test: /\.vue$/, use: "vue-loader" }
        ]
    },
    resolve: {
	    alias: {
		    'vue$': 'vue/dist/vue.js'
	    }
    }
}