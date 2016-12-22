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
#### Escopo do JS
```js
function sayAnimal() {
  var animal = 'cat';
  console.log(animal);
}
sayAnimal();
/** Erro de escopo **/
//console.log(animal);
```
#### Variável let no JS
```js
var animal = "cat";
console.log(animal);
{
  let animal = 'dog';
  console.log(animal);
}
console.log(animal);
//cat
//dog
//cat
```
#### Variável const no JS
```js
    const secretNumber = 28;

    const will = {
        name: 'Willian',
        age: 53
    };

    Object.freeze(will);

    will.age = 26;

    console.log(will);
```
#### Temporal Dead Zone
```js
console.log(cat);
    let cat = 'meow';
```
#### Introdução a Arrow Function
```js
    const ireland = ['Dublin', 'Galway', 'Cork'];
    const love = ireland.map(function(name) {
        return `I love ${name}!`;
    });
    const loveArrow = ireland.map((name) => {
        return `I love ${name}!`;
    });
    const loveArrowSingle = ireland.map(name => {
        return `I love ${name}!`;
    });
    const loveArrowOneLine = ireland.map(name => `I love ${name}!`);
    const loveChain = ireland
                        .filter(name => name === 'Dublin')
                        .map(name => `I love ${name}!`);
    console.log(loveChain);
    ```
#### Arrow Function e o Lexical This
    `revisar`
#### Introdução a Template Literals
```js
const ireland = {
      live: 'Dublin',
      love: 'Galway'
  };
  const text = 'Eu moro em ' + ireland.live + ' e sou apaixonado por ' + ireland.love+'!';
  const newText = `Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}!`;
const fruits = 'bannana'
              + `\n`
              + 'orange'
              + `\n`
              + 'apple';
const newFruits =
`bannana
orange
apple`;
  console.log(newFruits);
```
#### Usando Template Literals para Html Fragments
```js
const article = {
    title: 'Aprendendo Template Strings',
    intro: 'Uma breve explicação de como se utilizar template strings do ES6 em seu código hoje!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, officia, perspiciatis? Architecto, molestias autem. Repellat, laborum deserunt soluta necessitatibus. Tenetur illo, id magnam numquam neque illum temporibus, in qui eos.',
    tags: ['es6', 'js', 'template-literal']
};
function renderAuthor(name) {
    return (name) ? name : 'unknown';
}
const markup = `
    <article>
        <header>
            <h1>${article.title}</h1>
        </header>
        <section>
            <p>${article.intro}</p>
        </section>
        <footer>
            <ul>
                ${article.tags.map((tag) => `<li>${tag}</li>`).join('')}
            </ul>
            <p>Author: ${renderAuthor(article.author)}</p>
        </footer>
    </article>
`;
document.body.innerHTML = markup;
```
