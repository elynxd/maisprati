const ContaBancaria = require("./contaBancaria");

describe("Testes da classe ContaBancaria", () => {
    let conta;

    beforeEach(() => {
        conta = new ContaBancaria();
    });

    test("Saldo inicial deve ser 0", () => {
        expect(conta.verSaldo()).toBe(0);
    });

    test("Erro ao tentar depositar um valor inválido", () => {
        expect(() => conta.depositar(0)).toThrow(
            "O valor deve ser maior que zero"
        );
        expect(() => conta.depositar(-50)).toThrow(
            "O valor deve ser maior que zero"
        );
    });

    test("Error ao tentar sacar valor inválido", () => {
        expect(() =>
            conta.sacar(0).toThrow("O valor sacado deve ser maior que zero")
        );
    });
});
