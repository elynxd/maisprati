/**
 * 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
 * a média aritmética desses números.
 */

const promptSync = require("prompt-sync")()

let num = 1;
let sum = 0;

while(num != 0) {
    num = parseInt(promptSync("Digite um número: "));
    sum += num;
}

console.log(`Total: ${sum}`);