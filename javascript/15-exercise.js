/**
 * 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 * Fibonacci utilizando um loop for.
 */

let fibonacci = [1, 1];

for (let i = 0; i < 10; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
    console.table(fibonacci[i]);
}