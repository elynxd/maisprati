const ps = require("prompt-sync")();

const randomNumb = Math.floor(Math.random() * 100) + 1;

let count = 0;

function getUserGuess() {
    return parseInt(ps("Adivinhe um número entre 1 e 100: "));
}

let userGuess = getUserGuess();

while (userGuess !== randomNumb) {
    count++;

    if (userGuess > randomNumb) {
        console.log("Mais baixo! Tente novamente.");
    } else {
        console.log("Mais alto! Tente novamente.");
    }

    userGuess = getUserGuess();
}
count++;
console.log(
    `Parabéns! Você acertou o número ${randomNumb} em ${count} tentativas`,
);
