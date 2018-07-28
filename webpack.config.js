'use strict'

const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}