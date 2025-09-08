class ContaBancaria {
    constructor(saldo) {
        this.saldo = 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new Error("O valor inválido!");
        }
    }

    sacar(valor) {
        if (valor <= 0) {
            throw new Error("O valor sacado deve ser maior que zero");
        }

        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
    }

    verSaldo() {
        return this.saldo;
    }
}

module.exports = ContaBancaria;
