const path = require('path');

module.exports = {
    entry: './src/JS/main.js',
    output: {
        filename: '',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    option: {
                        presets: ['@babel/preset-env'],
                    }   
                }
            }
        ]
    }
};