const path = require('path');

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
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
};