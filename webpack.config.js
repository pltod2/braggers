const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeModulesFolderName = 'node_modules';
const staticFolderName = 'app/server/static';

//Note that if the correct NODE_ENV is set in Jenkins job we could default to Development here 
const ENV = process.env.NODE_ENV || "Production";


module.exports = {
  target: "web",
  context: __dirname, //this is probably default one
  entry: {
    app: './app/ui/boot.js'
  },
  output: {
    path: path.resolve(__dirname, staticFolderName, "gen"),
    filename: '[name].bundle.js',
    // This is for web pack dev server - the location from where it serves index.html
    publicPath: '/' + staticFolderName         
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            "presets": [
                // Webpack 1 wasn’t able to parse ES2015 modules, so Babel would convert them into CommonJS.
                // Webpack 2 can parse ES2015 modules, and is able to eliminate dead code based on which modules are used. 
                // So it’s recommended that you tell Babel not to convert modules into CommonJS - modules: false - http://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/              
                ["es2015", { "modules": false }], 
                'react',                
                "stage-0"
            ],
            "plugins": ["transform-class-properties"] 
          }
        }]
      },
      { 
        test: /\.css$/, 
        use: [
          ExtractTextPlugin.extract('css'),
          {
            loader: 'css-loader',
            options: {
              //Activates CSS Modules
              modules: true
            }
          }
        ] 
      },
      { 
        test: /\.less$/, 
        use: [
            ExtractTextPlugin.extract('css'),
            'css-loader',
            "less-loader"
        ]
      },
      { 
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/, 
        use: ['url-loader?limit=10000']
      }
    ]
  },
  plugins: [
    // Takes raw strings and inserts them, so you can put strings of JS if you want.
    new webpack.DefinePlugin({
      SHOW_LOGS: (ENV === "Development")
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true
    })
  ],  
  resolve: {
    modules: [
      path.resolve(__dirname, staticFolderName), 
      nodeModulesFolderName
    ]
  },  
  devServer: {
    //this is actually by default
    contentBase: __dirname
  }
};