import java.math.BigDecimal;

public class RetiradaNaLojaStrategy implements DeliveryFeeCalculator {
    
    @Override
    public BigDecimal calculate(Pedido pedido) {
        // Valida o CEP para verificar se está na área de cobertura
        CepValidator.validar(pedido.getCep());
        
        // Verifica se a região permite retirada na loja
        if (!podeRetirarNaLoja(pedido.getRegiao())) {
            throw new IllegalArgumentException("Retirada na loja não disponível para a região: " + pedido.getRegiao());
        }
        
        // Frete zero para retirada na loja
        return BigDecimal.ZERO;
    }
    
    private boolean podeRetirarNaLoja(String regiao) {
        // Simulação: apenas algumas regiões têm loja física
        return regiao != null && (
            regiao.contains("São Paulo - Grande SP") ||
            regiao.contains("Rio de Janeiro") ||
            regiao.contains("Minas Gerais")
        );
    }
    
    @Override
    public String toString() {
        return "Retirada na Loja - Sem custo de frete";
    }
}
