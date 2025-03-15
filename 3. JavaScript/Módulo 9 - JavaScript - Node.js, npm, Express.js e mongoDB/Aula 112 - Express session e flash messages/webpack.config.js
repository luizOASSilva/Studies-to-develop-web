const path = require('path');

module.exports = {
    mode: 'development',
    entry: './',
    output: {
        filename: '',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    presets: [
                        ['@Babel/preset-env']
                    ]
                }
            }
        ]
    }
};  