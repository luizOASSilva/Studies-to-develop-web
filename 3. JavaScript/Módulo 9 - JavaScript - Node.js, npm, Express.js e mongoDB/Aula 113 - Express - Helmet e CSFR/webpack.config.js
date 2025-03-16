const path = require('path');

module.exports = {
    mode: 'development',
    entry: '',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__filename, 'public')
    },
    module: {
        rules: [
            {
                test: /\,js$/,
                exclude: /node_modules/,
                use: {
                    loader: ['babel-loader'],
                    Options: {
                        presets: [
                            ['@babrl/preset-env']
                        ]
                    }
                }
            }
        ]
    }
};