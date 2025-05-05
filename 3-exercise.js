/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
 * "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
 */

const promptSync = require("prompt-sync")();

const notaInput = parseFloat(promptSync("Digite a nota: "));

if (notaInput >= 7.5) {
  console.log("Você foi aprovado!");
} else if (notaInput < 7.5 && notaInput >= 5) {
  console.log("Você está de recuperação");
} else {
  console.log("Você foi reprovado!");
}
