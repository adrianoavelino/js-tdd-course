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
## Trabalhando com Imports no ES6
```js
// import método from 'biblioteca'
// * carrega tudo da lib
// as => alias para o método (novo nome)
import { union as juntaTudo, uniq as soOsMesmos }  from 'ramda';

const arr1 = [1, 1, 2, 3];
const arr2 = [2, 3, 4];

const arr3 = juntaTudo(arr1, arr2);

const arr4 = soOsMesmos(arr1);

console.log(arr3);

console.log(arr4);
```
- [Site do RamdaJS](http://ramdajs.com/)
- [Site da MDN sobre Imports - complemento da aula](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [Capítulo sobre Módulos - ExploringJS - Inglês](http://exploringjs.com/es6/ch_modules.html)

## Trabalhando com Exports no ES6
- [Artigo da MDN sobre Exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

arquivo utils.js
```js
function sum(a, b) {
    return a + b;
}

// named export
// ter vários exports dentro de um
// msm arquivo
// só pode chamar com o msm nome
// import precisa das chaves { sub }
export function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

const PI = 3.14;

export { mult as multiplicacao, div, PI };

// método principal
// só pode ter um defaut por arquivo
// importar com qq nome
// não precisa utilizar as chaves
export default sum;
```
arquivo app.js
```js
//app.js
// import método from 'biblioteca';
// * carrega tudo da lib
// as => alias para o método (novo nome)
import { union as juntaTudo, uniq as soOsMesmos } from 'ramda';

import soma, { sub, multiplicacao, div as dividir, PI } from './utils';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = juntaTudo(arr1, arr2);

const arr4 = soOsMesmos(arr1);

console.log(arr3);

console.log(arr4);

console.log(soma(3, 2));

console.log(sub(3, 2));

console.log(multiplicacao(7, 2));

console.log(dividir(4, 2));

console.log(PI);
```
## UglifyJS no Webpack
- adicione o código abaixo no seu arquivo `webpack.config.js`

```js
plugins:[
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    output: { comments: false }
  })
]
```

Exemplo de arquivo `webpack.config.js` com o plugin

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
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    })
  ]
};
```
##  Variáveis de Ambiente no Webpack
```sh
npm install --save react react-dom
```
- adicione o código abaixo no webpack.config.js

```js
new webpack.DefinePlugin({
  'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
})
```
- Exemplo de arquivo webpack.config.js atualizado

```js
const webpack = require('webpack');
const nodeENV = process.env.node_ENV || 'production';
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
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
    })
  ]
};
```
## Adicionando Sourcemaps em nosso código
- [Tabela mostrando os tipos de source-map](https://webpack.github.io/docs/configuration.html#devtool)
- Adicione a linha `devtool:'source-map',` e a linha `sourceMap: true` no arquivo `webpack.config.js`.

Arquivo após alteração:
```js
const webpack = require('webpack');
const nodeENV = process.env.node_ENV || 'production';

module.exports = {
  devtool: 'source-map',
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
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
    })
  ]
};
```
## Inicializando um server com Webpack

```sh
npm install --save-dev webpack-dev-server
```
- adicione a seguinte linha no seu arquivo `package.json`:

```js
"server": "./node_modules/.bin/webpack-dev-server --inline --open"
```

arquivo `package.json` após atualização:
```js
{
  "name": "modulos-js",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "./node_modules/.bin/webpack --colors --progress",
    "watch": "npm run build -- --watch",
    "server": "./node_modules/.bin/webpack-dev-server --inline --open"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "babel-preset-es2015-native-modules": "^6.9.4",
    "webpack": "^2.2.0-rc.3"
  },
  "dependencies": {
    "ramda": "^0.22.1",
    "react": "^15.4.2",
    "react-dom": "^15.4.2"
  }
}
```
