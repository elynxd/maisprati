/**
 * 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
 */

const promptSync = require("prompt-sync")();

const numInput = Number(promptSync("Digite o número da tabuada: "))

let nums = 0;

for (let i = 0; i < 9; i++) {
    let sum = numInput * ++nums;
    console.log(`${numInput} * ${nums} : ${sum}`)
}
