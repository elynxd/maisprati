/*
 * 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
 * determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
 * utilizando if-else.
 * */

const promptSync = require("prompt-sync")();

let pesoInput = parseFloat(promptSync("Qual o seu peso atual?: "));
let alturaInput = parseFloat(promptSync("Qual a sua altura?: "));

let totalIMC = pesoInput / (alturaInput * 2);
console.log("seu IMC é de: " + totalIMC.toFixed(2));

if (totalIMC >= 0 && totalIMC <= 18.5) {
  console.log("Portanto você está abaixo do peso!");
} else if (totalIMC > 18.5 && totalIMC <= 24.9) {
  console.log("Portanto você está no seu peso normal!");
} else if (totalIMC >= 25 && totalIMC <= 29.9) {
  console.log("Portanto você está com sobrepeso!");
} else if (totalIMC >= 30) {
  console.log("Portanto você está com obesidade!");
}
