import java.math.BigDecimal;

public class Pedido {
    private String cep;
    private String regiao;
    private BigDecimal valorTotal;
    private BigDecimal peso;
    private DeliveryFeeCalculator calculadoraFrete;

    public Pedido(String cep, String regiao, BigDecimal valorTotal, BigDecimal peso) {
        this.cep = cep;
        this.regiao = regiao;
        this.valorTotal = valorTotal;
        this.peso = peso;
    }

    public void setCalculadoraFrete(DeliveryFeeCalculator calculadoraFrete) {
        this.calculadoraFrete = calculadoraFrete;
    }

    public BigDecimal calcularFrete() {
        if (calculadoraFrete == null) {
            throw new IllegalStateException("Calculadora de frete não foi definida");
        }
        return calculadoraFrete.calculate(this);
    }

    // Getters
    public String getCep() {
        return cep;
    }

    public String getRegiao() {
        return regiao;
    }

    public BigDecimal getValorTotal() {
        return valorTotal;
    }

    public BigDecimal getPeso() {
        return peso;
    }

    // Setters
    public void setCep(String cep) {
        this.cep = cep;
    }

    public void setRegiao(String regiao) {
        this.regiao = regiao;
    }

    public void setValorTotal(BigDecimal valorTotal) {
        this.valorTotal = valorTotal;
    }

    public void setPeso(BigDecimal peso) {
        this.peso = peso;
    }
}
