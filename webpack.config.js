const path = require('path'); 

module.exports = {
  mode: 'development', 
  entry: './src/index.js', //este es el punto de entrada de la aplicación
  output: {
    filename: 'bundle.js', // este es el nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), //carpeta de salida
},
module: {
    rules: [
        {
            test: /\.css$/,  //regex para identificar archivos css
             use: ['style-loader', 'css-loader'], //loaders sirven para procesar archivos css
        },
        {
           test: /\.js$/, // regex para identificar archivos js   
           exclude: /node_modules/, //excluir la carpeta node modules
           use: {
            loader: 'babel-loader', //loader para llevar js moderno a js antiguo para que sea compatible con todos los navegadores 
           options: {
                presets: ['@babel/preset-env'],
           },
         },
      },
    ],
  },
  devtool: 'source-map', //para generar mapas de codigos para depurar codigo
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true, // habilitar la compresión gzip
    port: 9000, //puerto del servidor de desarrollo 
  },
};
