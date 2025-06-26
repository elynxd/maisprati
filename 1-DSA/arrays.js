const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = nums.reduce((acumulador, valor) => acumulador + valor);
const media = soma/nums.length;

const pairs = nums.filter((num) => num % 2 === 0);

console.log(nums);
console.log(soma);
console.log(media);
console.log(pairs);

// ------------------------------------------------------------------

let numsTwo = [3, 2, 7, 19, 6, 4, 2, 10];
console.log(numsTwo);
let n = numsTwo.length;
// console.log(nums.sort((a, b) => a - b));

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (numsTwo[j] > numsTwo[j + 1]) {
            let temp = numsTwo[j];
            numsTwo[j] = numsTwo[j + 1];
            numsTwo[j + 1] = temp;
        }
    }
}

console.table(numsTwo);

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.table(matriz[i][j]);
    }
}

let matriz2 = [];

for (let i = 0; i < 10; i++){
    matriz2[i] = [];
    for (let j = 0; j < 10; j++){
        matriz2[i][j] = Math.floor(Math.random() * 10);
    }
}


console.table(matriz2);
