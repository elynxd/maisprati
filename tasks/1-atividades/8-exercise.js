/*
 * 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
 * e escreve-los em ordem crescente.
 * */

const promptSync = require("prompt-sync")();

let num1 = Number(promptSync("Digite o primeiro número: "));
let num2 = Number(promptSync("Digite o segundo número: "));

if (num1 === num2) {
  console.log("Os números digitados devem ser diferentes!");
} else if (num1 > num2) {
  array = [];
  array.push(num1, num2);
  console.log(array.reverse());
} else if (num2 > num1) {
  array = [];
  array.push(num1, num2);
  console.log(array);
}
