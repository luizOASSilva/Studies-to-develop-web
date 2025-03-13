const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'frontend'),
    output: {
        filename: 'bundle.js',
        path:path.resolve(__dirname, 'public', 'assets', 'JS'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, 
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'source-map'
}