import * as R from 'ramda';

const arr1 = [1, 1, 2, 3];
const arr2 = [2, 3, 4];

const arr3 = R.union(arr1, arr2);

console.log(arr3);
