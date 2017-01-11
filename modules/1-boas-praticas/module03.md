# Módulo 03 - Módulos em JS
##  Introdução a Módulos em JS
- https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.si379v4cu

## Configurando o Webpack
```sh
npm init -y #inicia projeto npm sem perguntar
npm install --save-dev webpack@beta babel-loader babel-core babel-preset-es2015-native-modules
node_modules/.bin/webpack --help #exibe ajuda do webpack
npm install ramda --save #instala o ramda
```
- crie o arquivo `index.html` com o seguinte código:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
<script src="./build.js"></script>
</body>
</html>
```
- crie o arquivo `webpack.config.js` com o código abaixo:

```js
const webpack = require('webpack');
module.exports = {
  entry: {
    filename: './app.js',
  },
  output: {
    filename: './build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }],
          ],
        },
      },
    ],
  },
};
```
Para testar se funcionou execute no terminal:
```sh
npm run watch
```
