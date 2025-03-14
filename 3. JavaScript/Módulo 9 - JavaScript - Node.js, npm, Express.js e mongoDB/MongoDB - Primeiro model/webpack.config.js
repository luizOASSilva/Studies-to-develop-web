const path = require('path');

module.exports = {
    entry: './frontend/JS/index.js',
    output: {
        path: path.resolve(__dirname, 'public')
    }
};
