var pats = require('path')
const webpack = require('webpack')
const babilePlugin = require('babili-webpack-plugin')
let plugins = []


if(process.env.NODE_ENV == 'production'){plugins.push(new babilePlugin())}

module.exports = {
    entry:'./resources/assets/App.js',
    output:{
        filename:'bundle.js',
        path: pats.resolve(__dirname,"public/js")
    },
    resolve:{
      extensions:['.js','.ts','.vue'],
      alias: {
        vue: 'vue/dist/vue.js'
      }
    },
    module:{
        rules:[
            {
              test:/\.ts$/,
              use:[{
                  loader:'ts-vue-loader'
                 },
                 {
                     loader:'ts-loader',
                     options:{
                     appendTsSuffixTo:[/\.vue$/]
                   }
                 }],
            },
            {
                test:/\.js$/,
                exclude:'/node_modules/',
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
             },
             {
                test:/\.scss$/,
                loaders:['style','css','sass'] 
             },{
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
             },
             {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
             }
        ]
    },
    plugins
}