/*
 * 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
 * forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
 * compradas, calcule e escreva o valor total da compra.
 * */

const promptSync = require("prompt-sync")();

function formatterCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

const quantityInput = Number(promptSync("Digite a quantidade de maças: "));
if (isNaN(quantityInput) || quantityInput < 0) {
  console.log("Quantidade de maças inválida! Tente novamente.");
  return;
}

function calcPriceMacas(quantityInput) {
  let priceUnit;

  if (quantityInput < 12) {
    priceUnit = 0.3;
  } else {
    priceUnit = 0.25;
  }

  let total = quantityInput * priceUnit;

  return formatterCurrency(total);
}

console.log(`O total da compra é de: ${calcPriceMacas(quantityInput)}`);
