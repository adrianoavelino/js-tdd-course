# JS com TDD na Prática ___<small>(Willian Justen)</small>___

## Requisitos
- Git
- Node > 6
- NPM > 3
- Conta no Travis

## Módulos

### Módulo 01 - <small>Boas práticas e estrutura</small>

#### Aula - Configurando o NPM e Criando o package.json

- criar repositório Git com `git init`
- configurar conta do NPM
```bash
npm set init-author-name "Adriano Avelino"
npm set init-author-email "adriano-st777@hotmail.com"
npm set init-license "MIT"
npm adduser
npm init
```

#### Aula - Criando o gitignore de forma simples
- criar arquivo gitignore
```bash
sudo npm install gitignore -g
gitignore -types #lista os tipos de arquivos gitignore
gitignore Node
```

#### Aula - Criando arquivos para documentação
- template: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
- licença: https://opensource.org/licenses/MIT
- Contribuição: https://github.com/willianjusten/js-tdd-course/blob/master/CONTRIBUTING.md

#### Aula - Padrões de Código - Styleguides
- Jshint: http://jshint.com/
- JSCS: http://jscs.info/
- Eslint: http://eslint.org/Idiomatic
- Styleguide Airbnb: https://github.com/airbnb/javascript
- Standard: https://github.com/feross/standard

#### Aula - Instalando e Usando o Eslint
- instale o ESlint localmente
```bash
sudo npm install eslint --save-dev
sudo npm install eslint-plugin-jsx-a11y@^2.2.3 --save-dev #tive que instalar manualmente devido a dependência
./node_modules/.bin/eslint --init
./node_modules/.bin/eslint src/*.js
```

#### Configurando o editorconfig
- site: http://editorconfig.org/
- exemplo de configuração:
```bash
root = true
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

#### Criando um Npm Script
- Por que npm scripts: https://css-tricks.com/why-npm-scripts/
- Exemplo de npm script no arquivo package.json:
```
"scripts": {
  "eslint": "./node_modules/.bin/eslint src/*.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

#### Configurando hooks no git
- Husky: https://github.com/typicode/husky
- instalando husky
```bash
npm install husky --save-dev
```
- tipos de hooks: https://github.com/typicode/husky/blob/master/HOOKS.md
- configurando Husky
```
// Edit package.json
{
    "scripts": {
      "precommit": "npm test",
      "prepush": "npm test",
      "...": "..."
    }
}
```
### Módulo 02 - <small>Aprendendo ES6</small>
#### Introdução ao ES6
- ES6 Features: http://es6-features.org/#Constants
- Tabela de Compatibilidade do ES6: http://kangax.github.io/compat-table/es6/
- Blog do Ponyfoo - ES6 in Depth: https://ponyfoo.com/articles/tagged/es6-in-depth
- Blog do Jonas Mendes - Nipher.io: http://nipher.io/
