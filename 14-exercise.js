/**
 * 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 * utilizando um loop for ou while.
 */

const promptSync = require("prompt-sync")();

const numInput = Number(promptSync("Digite um número: "));

let result = 1;

for(let i = numInput; i >= 1; i--) {
    result *= i;
    console.log(i);
}

console.log(`total: ${result}`)
