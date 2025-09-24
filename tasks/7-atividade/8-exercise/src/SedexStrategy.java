import java.math.BigDecimal;

public class SedexStrategy implements DeliveryFeeCalculator {
    
    private static final BigDecimal TARIFA_BASE = new BigDecimal("15.00");
    private static final BigDecimal TARIFA_POR_KG = new BigDecimal("2.50");
    
    @Override
    public BigDecimal calculate(Pedido pedido) {
        // Valida o CEP
        CepValidator.validar(pedido.getCep());
        
        // Cálculo: tarifa base + (peso * tarifa por kg)
        BigDecimal custoPeso = pedido.getPeso().multiply(TARIFA_POR_KG);
        BigDecimal freteTotal = TARIFA_BASE.add(custoPeso);
        
        // Aplicar multiplicador por região (simulação)
        BigDecimal multiplicadorRegiao = getMultiplicadorPorRegiao(pedido.getRegiao());
        
        return freteTotal.multiply(multiplicadorRegiao);
    }
    
    private BigDecimal getMultiplicadorPorRegiao(String regiao) {
        if (regiao == null) return BigDecimal.ONE;
        
        if (regiao.contains("São Paulo")) {
            return new BigDecimal("1.0");
        } else if (regiao.contains("Rio de Janeiro") || regiao.contains("Minas Gerais")) {
            return new BigDecimal("1.2");
        } else if (regiao.contains("Sul")) {
            return new BigDecimal("1.3");
        } else if (regiao.contains("Nordeste") || regiao.contains("Norte")) {
            return new BigDecimal("1.5");
        } else {
            return new BigDecimal("1.4");
        }
    }
    
    @Override
    public String toString() {
        return "Sedex - Entrega expressa (1-2 dias úteis)";
    }
}
