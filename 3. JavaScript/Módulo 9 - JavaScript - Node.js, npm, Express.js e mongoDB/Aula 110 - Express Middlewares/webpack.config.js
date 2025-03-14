const path = require('path');

module.exports = {
    mode: 'production',
    entry: './frontend/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public', 'assets', 'JS')
    },
    module: {
        rules: [ 
            {   
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets :[
                            ['@babel/preset-env']
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devtool: 'source-map'
};