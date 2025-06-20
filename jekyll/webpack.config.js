const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'bundle.js': [
            path.resolve(__dirname, 'js/jquery-latest.min.js'),
            path.resolve(__dirname, 'js/bootstrap.min.js'),
            path.resolve(__dirname, 'js/main.js')
        ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'js')
    }
};

new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
});
