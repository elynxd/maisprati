import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

public final class Money {
    private final BigDecimal valor;
    private final Currency moeda;

    public Money(BigDecimal valor, Currency moeda) {
        if (valor == null) {
            throw new IllegalArgumentException("Valor não pode ser nulo");
        }
        if (moeda == null) {
            throw new IllegalArgumentException("Moeda não pode ser nula");
        }
        if (valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor não pode ser negativo");
        }
        
        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN);
        this.moeda = moeda;
    }

    public Money(double valor, Currency moeda) {
        this(new BigDecimal(Double.toString(valor)), moeda);
    }

    public Money(String valor, Currency moeda) {
        this(new BigDecimal(valor), moeda);
    }

    public BigDecimal getValor() {
        return valor;
    }

    public Currency getMoeda() {
        return moeda;
    }

    public Money somar(Money outro) {
        validarMesmaModeda(outro);
        return new Money(this.valor.add(outro.valor), this.moeda);
    }

    public Money subtrair(Money outro) {
        validarMesmaModeda(outro);
        BigDecimal novoValor = this.valor.subtract(outro.valor);
        if (novoValor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Resultado não pode ser negativo");
        }
        return new Money(novoValor, this.moeda);
    }

    public Money multiplicar(BigDecimal fator) {
        if (fator == null) {
            throw new IllegalArgumentException("Fator não pode ser nulo");
        }
        if (fator.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Fator não pode ser negativo");
        }
        return new Money(this.valor.multiply(fator), this.moeda);
    }

    public Money multiplicar(double fator) {
        return multiplicar(new BigDecimal(Double.toString(fator)));
    }

    public Money applyDiscount(BigDecimal percentualDesconto) {
        if (percentualDesconto == null) {
            throw new IllegalArgumentException("Percentual de desconto não pode ser nulo");
        }
        if (percentualDesconto.compareTo(BigDecimal.ZERO) < 0 || 
            percentualDesconto.compareTo(new BigDecimal("100")) > 0) {
            throw new IllegalArgumentException("Percentual de desconto deve estar entre 0 e 100");
        }

        BigDecimal fatorDesconto = percentualDesconto.divide(new BigDecimal("100"), 10, RoundingMode.HALF_EVEN);
        BigDecimal valorDesconto = this.valor.multiply(fatorDesconto);
        return new Money(this.valor.subtract(valorDesconto), this.moeda);
    }

    public boolean isZero() {
        return valor.compareTo(BigDecimal.ZERO) == 0;
    }

    public boolean maiorQue(Money outro) {
        validarMesmaModeda(outro);
        return this.valor.compareTo(outro.valor) > 0;
    }

    public boolean menorQue(Money outro) {
        validarMesmaModeda(outro);
        return this.valor.compareTo(outro.valor) < 0;
    }

    private void validarMesmaModeda(Money outro) {
        if (!this.moeda.equals(outro.moeda)) {
            throw new IllegalArgumentException("Operação não permitida entre moedas diferentes");
        }
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Money dinheiro = (Money) obj;
        return Objects.equals(valor, dinheiro.valor) && moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    @Override
    public String toString() {
        return moeda.getSymbol() + " " + valor.toString();
    }
}
