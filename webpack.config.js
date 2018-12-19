const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        test: './src/test.js'
   },
    plugins: [
        new CleanWebpackPlugin(['public/js'])
    ],
    devtool: 'inline-source-map',
    output: {
        filename: '[name].all.js',
        path: path.resolve(__dirname, "public/js")
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }
            }
        ]
    },
    watch:true
}