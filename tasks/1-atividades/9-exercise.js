/*
 * 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
 * utilizando um loop for.
 * */

for (let i = 10; i > 0; i--) {
  setTimeout(
    () => {
      console.log(`contagem regressiva: ${i}`);
    },
    (10 - i) * 1000,
  );
}
