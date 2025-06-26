/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
 * Utilize switch-case para implementar a lógica de cada opção selecionada.
 * */

const promptSync = require("prompt-sync")();

const menu = ["1) Opção A", "2) Opção B", "3) Opção C"];
let arrayMenu = [];
let newIndex = 1;

// mapeia array com index de 1 a 3
menu.map((item) => {
  arrayMenu[newIndex] = item;
  newIndex++;
});

console.table(arrayMenu);

const numList = Number(promptSync("Escolha a opção desejada de 1 a 3: "));
console.log();

switch (numList) {
  case 1:
    console.log("Você escolheu a opção A");
    break;
  case 2:
    console.log("Voce escolheu a opção B");
    break;
  case 3:
    console.log("Voce escolheu a opção C");
    break;
}
