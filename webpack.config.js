const path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
};