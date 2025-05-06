/** 
 * 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
 */

const promptSync = require("prompt-sync")();

let numInput = parseInt(promptSync("Digite um número inteiro: "))

for (let i = 0; i < 10; i++) {
    console.log(`Repetindo: ${numInput}`)
}