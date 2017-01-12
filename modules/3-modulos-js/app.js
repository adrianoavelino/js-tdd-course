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
