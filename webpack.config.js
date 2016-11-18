const path = require('path');
const webpack = require('webpack');

const nodeModulesFolderName = 'node_modules';
const staticFolderName = 'app/server/express/static';

//Note that if the correct NODE_ENV is set in Jenkins job we could default to Development here 
const ENV = process.env.NODE_ENV || "Production";

module.exports = {
  context: __dirname, //this is probably default one
  entry: {
    app: './app/ui/boot.js'
  },
  output: {
    path: path.resolve(__dirname, staticFolderName),
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
          'style-loader',
          { 
            loader: 'css-loader', 
            options: { modules: true } 
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { 
            loader: 'css-loader', 
            options: { modules: true } 
          },
          'less-loader'
        ]
      },
      { 
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/, 
        use: ['url-loader']
      }
      
      // Loaders for other file types can go here
    ]
  },
  plugins: [
    // Takes raw strings and inserts them, so you can put strings of JS if you want.
    new webpack.DefinePlugin({
      SHOW_LOGS: (ENV === "Development")
    })
  ],  
  resolve: {
    modules: [path.resolve(__dirname, staticFolderName), nodeModulesFolderName]
  },  
  devServer: {
    contentBase: __dirname
  }
};