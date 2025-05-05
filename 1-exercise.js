const promptSync = require("prompt-sync")();

/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
 * utilizando uma estrutura de controle if.
 */

const numInput = parseInt(promptSync("Digite um número: "));
let total = numInput / 2;

if (numInput % 2 == 0) {
    console.log(numInput + " é número par");
} else {
    console.log(numInput + " é número impar");
}

console.log("e sua metade é: " + total.toFixed(1));
