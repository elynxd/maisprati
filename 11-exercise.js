/**
 * 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
 * utilizando um loop for.
 */

const promptSync = require("prompt-sync")();


const num1 = Number(promptSync("Digite o primeiro número: "));
const num2 = Number(promptSync("Digite o segundo número: "));
const num3 = Number(promptSync("Digite o terceiro número: "));
const num4 = Number(promptSync("Digite o quarto número: "));
const num5 = Number(promptSync("Digite o quinto número: "));

const arrayNum = [];
arrayNum.push(num1, num2, num3, num4, num5);

let sum = 0;

for(let i = 0; i < arrayNum.length; i++) {
    sum += arrayNum[i];
}

console.log(`total: ${sum}`)