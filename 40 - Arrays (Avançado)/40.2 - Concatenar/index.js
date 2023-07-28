// Com a função concat()
const a1 = [1, 2, 3, 4, 5];
const a2 = [6, 7, 8, 9, 10];
const a3 = a1.concat(a2, [10, 11, 12], 'test');
console.log(a3);

// com ...
const a4 = [...a1, 'test', ...a2, [11, 12], ...[13, 14]]; // sem o ...antes do array fica com []
console.log(a4);
