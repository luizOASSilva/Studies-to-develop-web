const path = require('path');

module.exports = {
    entry: './src/assets/JS/main.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public', 'assets', 'JS'),
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
                test: /\.css$/i,
                use: 'css-loader'
            }
        ]
    },
    devtool: 'source-map'
};
