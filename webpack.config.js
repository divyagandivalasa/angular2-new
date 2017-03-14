var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./app/main.ts',
    output:{
        path:'./dist',
        filename:'app.bundle.js'
    },
    module:{
        loaders:[
            {test:/\.ts/, loaders:['ts','angular2-router-loader']}
        ]
    },
    resolve:{
        extensions:['','.js','.ts']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
};