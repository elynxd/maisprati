import java.math.BigDecimal;
import java.util.function.Predicate;

public class FretePromocionalStrategy implements DeliveryFeeCalculator {

    protected final DeliveryFeeCalculator estrategiaBase;
    protected final Predicate<Pedido> condicaoFreteGratis;
    private final String descricaoPromocao;

    public FretePromocionalStrategy(DeliveryFeeCalculator estrategiaBase,
            Predicate<Pedido> condicaoFreteGratis,
            String descricaoPromocao) {
        this.estrategiaBase = estrategiaBase;
        this.condicaoFreteGratis = condicaoFreteGratis;
        this.descricaoPromocao = descricaoPromocao;
    }

    @Override
    public BigDecimal calculate(Pedido pedido) {
        // Verifica se atende à condição promocional
        if (condicaoFreteGratis.test(pedido)) {
            System.out.println("🎉 Promoção aplicada: " + descricaoPromocao);
            return BigDecimal.ZERO;
        }

        // Caso contrário, usa a estratégia base
        return estrategiaBase.calculate(pedido);
    }

    @Override
    public String toString() {
        return estrategiaBase.toString() + " (com promoção: " + descricaoPromocao + ")";
    }

    public static class Factory {

        public static FretePromocionalStrategy freteGratisAcimaDe(DeliveryFeeCalculator estrategiaBase,
                BigDecimal valorMinimo) {
            return new FretePromocionalStrategy(
                    estrategiaBase,
                    pedido -> pedido.getValorTotal().compareTo(valorMinimo) >= 0,
                    "Frete grátis acima de R$ " + valorMinimo);
        }

        public static FretePromocionalStrategy freteGratisPorRegiao(DeliveryFeeCalculator estrategiaBase,
                String regiaoPromocional) {
            return new FretePromocionalStrategy(
                    estrategiaBase,
                    pedido -> pedido.getRegiao().contains(regiaoPromocional),
                    "Frete grátis para " + regiaoPromocional);
        }

        public static FretePromocionalStrategy freteGratisAcimaDePeso(DeliveryFeeCalculator estrategiaBase,
                BigDecimal pesoMinimo) {
            return new FretePromocionalStrategy(
                    estrategiaBase,
                    pedido -> pedido.getPeso().compareTo(pesoMinimo) >= 0,
                    "Frete grátis para pedidos acima de " + pesoMinimo + "kg");
        }

        public static FretePromocionalStrategy freteGratisCombinado(DeliveryFeeCalculator estrategiaBase,
                BigDecimal valorMinimo,
                BigDecimal pesoMinimo) {
            return new FretePromocionalStrategy(
                    estrategiaBase,
                    pedido -> pedido.getValorTotal().compareTo(valorMinimo) >= 0 &&
                            pedido.getPeso().compareTo(pesoMinimo) >= 0,
                    "Frete grátis acima de R$ " + valorMinimo + " e " + pesoMinimo + "kg");
        }
    }
}
