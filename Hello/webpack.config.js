
module.exports = {
    entry: './src/index.js',
    output: {
        filename: './dist/index.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: {
                cacheDirectory: true,
                presets: ['es2015','react']
            }
        }]
    }
}
