const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //追記

module.exports = {
    watch: true,
    mode: 'development',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    plugins: [
        // プラグインの設定追加
        new HtmlWebpackPlugin({
            title: 'Plugin generate page',
            template: 'src/root.html'
        })
    ]
};