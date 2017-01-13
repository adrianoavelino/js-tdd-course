// import método from 'biblioteca'
// * carrega tudo da lib
// as => alias para o método (novo nome)
import { union as juntaTudo, uniq as soOsMesmos }  from 'ramda';
import sum, { sub, mult, div as divisao, PI } from './utils.js';
import react from 'react';
import reactDom from 'react-dom';

const arr1 = [1, 1, 2, 3];
const arr2 = [2, 3, 4];

const arr3 = juntaTudo(arr1, arr2);

const arr4 = soOsMesmos(arr1);

console.log(arr3);

console.log(arr4);

console.log(sum(1, 3));

console.log(sub(3, 1));

console.log(mult(3, 5));

console.log(divisao(10, 5));

console.log(PI);
