/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
 *  adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
 *  controle if-else.
 */
const promptSync = require("prompt-sync")();

const ageInput = parseInt(promptSync("Digite a idade: "));

if (ageInput >= 0 && ageInput <= 10) {
  console.log("É uma criança");
} else if (ageInput >= 11 && ageInput <= 17) {
  console.log("É um adolescente");
} else if (ageInput >= 18 && ageInput <= 59) {
  console.log("É um adulto");
} else if (ageInput >= 60) console.log("É um idoso");
