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
#### Tagged Template
```html
<!DOCTYPE html>
<html>
<head>
    <title>03 - Tagged Template Literal</title>
</head>
<style>
    .green {
        color: green;
        font-size: 25px;
    }
</style>
<body>
</body>
<script>
    const city = 'Dublin';
    const something = 'Guinness';
    const otherThing = 'Leprechaums';
    function green(template, ...values) {
        return template.reduce((accumulator, part, i) => {
            return `
                ${accumulator}
                <span class="green">${values[i - 1].toUpperCase()}</span>
                ${part}
            `
        });
    }
    const ireland = green`I live in ${city} the city of ${something} and ${otherThing}!`;
    document.body.innerHTML = ireland;
</script>
</html>
```
#### Shorthand Properties
```js
let firstName = 'Willian';
let surname = 'Justen';
let age = 26;
const person = {
    firstName,
    surname,
    age,
    hello() {
        console.log('Hello!')
    }
};
console.log(person);
person.hello();
```
#### Default Parameters
```js
function hello (name = 'Willian', surname = 'Justen') {
    console.log(`Hello ${name} ${surname}! How are you?`);
}
hello();
hello('Jonas', 'Mendes');
hello('Jonas');
```
#### Novos métodos para Strings
```js
let text = 'Lorem ipsum dolor sit amet';
console.log(text.startsWith('rem', 2));
console.log(text.endsWith('ame', 25));
console.log(text.includes('ipsum'));
console.log('lol'.repeat(10));
```
#### Array.from()
- Livro com explicações das novas features do Array http://exploringjs.com/es6/ch_arrays.html
```js
<!DOCTYPE html>
<html>
<head>
    <title>01 - Array.from</title>
</head>
<body>
    <ul id="list">
        <li>Willian</li>
        <li>Jonas</li>
        <li>Gabriel</li>
    </ul>
</body>
<script>
    // const text = 'Willian';
    // console.log(Array.from(text));
    const list = document.querySelectorAll('#list li');
    const listArray = Array.from(list)
    console.log(listArray);
    const names = listArray.map((name) => name.textContent);
    console.log(names);
</script>
</html>
```
#### Array.of()
```js
const array = Array.of(1,4, 'Willian', {name: 'Jonas'});
console.log(array);
```
#### Array.find() e Array.findIndex()
```js
const data = [
    {
        name: 'Willian',
        age: 26,
        city: 'Dublin'
    },
    {
        name: 'Jonas',
        age: 22,
        city: 'Cologne'
    }
];
// const sampleArray = [4, -5, 0, -1];
// const underZero = sampleArray.find(x => x < 0);
// const underZeroIndex = sampleArray.findIndex(x => x < 0);
// console.log(underZero);
// console.log(underZeroIndex);
const jonas = data.find(person => person.name === 'Jonas');
const jonasIndex = data.findIndex(person => person.name === 'Jonas');
console.log(jonasIndex);
```
#### array.fill()
```js
const arr = new Array(50);
arr.fill('lol', 3, 6);
console.log(arr);
const newArr = [1,2,3,4,5,6];
newArr.fill('lol', 1, 3);
console.log(newArr);
```
#### Introdução ao Destructuring
```js
var data = {
    name: 'Willian',
    surname: 'Justen',
    age: 25,
    blog: 'https://willianjusten.com.br',
    social: {
        twitter: '@Willian_Justen',
        facebook: '/willianjusten'
    }
};
// const name = data.name;
// const surname = data.surname;
// const twitter = data.social.twitter;
// console.log(name);
// console.log(surname);
// console.log(twitter);
//
const { name, surname } = data;
console.log(name);
console.log(surname);
const { facebook, twitter } = data.social;
console.log(facebook);
console.log(twitter);
const { facebook: fb } = data.social;
console.log(fb);
const { city = 'Dublin' } = data;
console.log(city);
```
#### Destructuring em Arrays
```js
const arr = ['Willian', 'Justen', 26, 'Dublin'];
const [ name, surname, age, city ] = arr;
console.log(name);
console.log(surname);
console.log(age);
console.log(city);
```
#### Fazendo swap de variáveis com destructuring
```js
let a = 42;
let b = 21;
console.log("a: ", a);
console.log("b: ", b);
[a, b] = [b, a]
console.log("a: ", a);
console.log("b: ", b);
```
#### Introdução ao Spread Operator
```js
let front = ['react', 'vue', 'angular'];
let back = ['python', 'ruby', 'nodejs'];
// let fullStack = [];
// fullStack = fullStack.concat(front);
// fullStack.push('RxJS');
// fullStack = fullStack.concat(back);
//
let fullStack = [...front, 'RxJS', ...back];
console.log(fullStack);
// console.log([...'will']);
// console.log(...front);
```
#### Usando o spread dentro de funções
```js

    function makeSandwich(bread, cheese, sauce) {
        console.log(`Your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`);
    }
    const ingredients = ['white', 'cheddar', 'barbecue'];
    makeSandwich(...ingredients);
```
#### Rest params
```js
function multiply(mult, ...args) {
    return args.map(arg => arg * mult);
}
console.log(multiply(5, 1, 2, 3, 4, 5, 6));
```
#### Introdução a Promises
```js
var defer = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('Hello! It works!');
        } else {
            reject('Error!');
        }
    }, 2000);
});
defer
    .then((data) => {
        console.log(data);
        return 'foo';
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
```
#### Exemplo Real de Promises
```js
var posts = fetch('https://willianjusten.com.br/search.json');
// pending
// resolved
// rejected
posts
    .then(data => data.json())
    .then(data => {
        throw new Error('ixi deu erro');
    })
    .catch(err => console.error(err));
```
#### Manipulando múltiplas Promises
```js
const currency = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ currency: 'euro', value: 3.50 });
    }, 5000);
});
const countries = new Promise((resolve, reject) => {
    resolve(['Ireland', 'England', 'Scotland']);
});
// Promise
//     .all([currency, countries])
//     .then(responses => {
//         console.log(responses);
//     })
Promise
    .race([currency, countries])
    .then(responses => {
        console.log(responses);
    })
```
#### Herança Prototipal
```js
// class
function Animal(kind, sound) {
    // constructor
    this.kind = kind;
    this.sound = sound;
}
// method
Animal.prototype.hello = function() {
    console.log(`${this.sound} I'm a ${this.kind}!`);
}
const dog = new Animal('dog', 'auau');
const cat = new Animal('cat', 'meow');
```
#### Criando Classes do ES6
```js
class Animal {
    constructor(kind, sound) {
        this.kind = kind;
        this.sound = sound;
    }
    hello() {
        console.log(`${this.sound} I'm a ${this.kind}!`);
    }
    static info() {
        console.log('This is a class to create animals!');
    }
    get name() {
        console.log(`${this.sound} My name is Jake!`);
    }
    set nickname(nick) {
        this.nick = nick;
    }
}
const dog = new Animal('dog', 'auau');
const cat = new Animal('cat', 'meow');
```
#### Usando extended classes
```js
class Animal {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`I'm ${this.name}!`);
    }
}
class Dog extends Animal {
    constructor(name, sound) {
        super(name);
        this.sound = sound;
    }
    bark() {
        console.log(`${this.sound} I'm ${this.name}!`);
    }
}
const elephant = new Animal('Dumbo');
const dog = new Dog('Jake', 'auau');
```
#### Introdução a Symbols
- [arquivo da aula](https://github.com/willianjusten/es6-curso/blob/master/10-symbols-iterators/01-symbols-intro.html)
#### Iterators e Iterables - for...of
```js
// iterators
// iterable
var txt = 'Ireland'; // iterable
var it = txt[Symbol.iterator](); // iterator
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
for ( letter of txt ) {
    console.log(letter);
    if (letter === 'a') break;
}
```
#### Introdução a Generators
```js
function* genNames() {
    console.log('Chamando primeiro nome!');
    yield 'Willian';
    console.log('Chamando segundo nome!');
    yield 'Jonas';
    console.log('Chamando terceiro nome!');
    yield 'Gabriel';
}
const names = genNames();
console.log(names.next());
console.log(names.next());
console.log(names.next());
```
#### Usando Generators para fluxos assíncronos
```js
function ajax(url) {
    fetch(url)
        .then(data => data.json())
        .then(data => dados.next(data));
}
// https://willianjusten.com.br/search.json
// https://api.github.com/users/willianjusten
function* ajaxGen() {
    console.log('Buscando posts...');
    const posts = yield ajax('https://willianjusten.com.br/search.json');
    console.log(posts);
    console.log('Buscando dados github...')
    const github = yield ajax('https://api.github.com/users/willianjusten');
    console.log(github);
    console.log('Buscando dados github 2...')
    const github2 = yield ajax('https://api.github.com/users/willianjusten');
    console.log(github2);
}
const dados = ajaxGen();
dados.next();
```
#### Introdução ao Proxy
```js
let obj = {
    name: 'Willian',
    age: 26
};
let proxy = new Proxy(obj, {
    get(target, name) {
        console.log('Alguém está o pedindo o nome =D');
        return target[name];
    },
    set(target, name, value) {
        console.log('Alguém está mudando o nome!');
        target[name] = value.toUpperCase();
    }
});
```
#### Introdução ao Set
```js
let mySet = new Set(['willian', 'jonas', 'godoy']);
mySet.add('marcio');
mySet.add('marcio');
mySet.add('marcio');
mySet.add('willian');
mySet.delete('willian');
console.log(mySet.has('willian'));
console.log(mySet.has('marcio'));
console.log(mySet[1]);
let it = mySet.values();
console.log(it.next());
for (name of it) {
    console.log(name);
}
```
#### Introdução ao WeakSet
```js
let obj1 = {
    name: 'Willian',
    age: 26
};
let obj2 = {
    name: 'Jonas',
    age: 22
};
let ws = new WeakSet([obj1, obj2]);
```
