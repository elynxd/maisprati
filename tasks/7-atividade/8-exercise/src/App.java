import java.math.BigDecimal;

public class App {
    public static void main(String[] args) {
        System.out.println("=== Demonstração do Padrão Strategy - Cálculo de Frete ===\n");

        try {
            demonstrarCalculoFrete();
        } catch (Exception e) {
            System.err.println("Erro: " + e.getMessage());
        }
    }

    private static void demonstrarCalculoFrete() {
        // Criar pedidos de teste
        Pedido pedido1 = criarPedido("01234-567", new BigDecimal("150.00"), new BigDecimal("2.5"));
        Pedido pedido2 = criarPedido("20040-020", new BigDecimal("80.00"), new BigDecimal("1.2"));
        Pedido pedido3 = criarPedido("30112-000", new BigDecimal("250.00"), new BigDecimal("5.0"));

        // Demonstrar diferentes estratégias
        demonstrarEstrategiasSimplesEstrategias(pedido1);
        demonstrarEstrategiasPromocional(pedido2);
        demonstrarTrocaEmTempoExecucao(pedido3);
        demonstrarValidacaoCep();
    }

    private static Pedido criarPedido(String cep, BigDecimal valor, BigDecimal peso) {
        String regiao = CepValidator.determinarRegiao(cep);
        return new Pedido(cep, regiao, valor, peso);
    }

    private static void demonstrarEstrategiasSimplesEstrategias(Pedido pedido) {
        System.out.println("🚚 Comparando estratégias para pedido de R$ " + pedido.getValorTotal() +
                " (" + pedido.getPeso() + "kg) - CEP: " + pedido.getCep());
        System.out.println("Região: " + pedido.getRegiao());
        System.out.println();

        // Sedex
        pedido.setCalculadoraFrete(new SedexStrategy());
        BigDecimal freteSedex = pedido.calcularFrete();
        System.out.println("Sedex: R$ " + freteSedex + " - " + pedido.calcularFrete());

        // PAC
        pedido.setCalculadoraFrete(new PacStrategy());
        BigDecimal fretePac = pedido.calcularFrete();
        System.out.println("PAC: R$ " + fretePac);

        // Retirada na loja
        try {
            pedido.setCalculadoraFrete(new RetiradaNaLojaStrategy());
            BigDecimal freteRetirada = pedido.calcularFrete();
            System.out.println("Retirada na Loja: R$ " + freteRetirada);
        } catch (IllegalArgumentException e) {
            System.out.println("Retirada na Loja: " + e.getMessage());
        }

        System.out.println();
    }

    private static void demonstrarEstrategiasPromocional(Pedido pedido) {
        System.out.println("🎁 Demonstrando estratégias promocionais com lambdas");
        System.out.println(
                "Pedido: R$ " + pedido.getValorTotal() + " (" + pedido.getPeso() + "kg) - CEP: " + pedido.getCep());
        System.out.println();

        DeliveryFeeCalculator sedexBase = new SedexStrategy();

        // Promoção 1: Frete grátis acima de R$ 100
        pedido.setCalculadoraFrete(
                FretePromocionalStrategy.Factory.freteGratisAcimaDe(sedexBase, new BigDecimal("100.00")));
        System.out.println("Sedex com promoção (acima R$ 100): R$ " + pedido.calcularFrete());

        // Promoção 2: Frete grátis para São Paulo
        pedido.setCalculadoraFrete(
                FretePromocionalStrategy.Factory.freteGratisPorRegiao(sedexBase, "São Paulo"));
        System.out.println("Sedex com promoção regional: R$ " + pedido.calcularFrete());

        // Promoção 3: Lambda customizada - desconto de 50% para pedidos pequenos
        pedido.setCalculadoraFrete(new DeliveryFeeCalculator() {
            @Override
            public BigDecimal calculate(Pedido p) {
                if (p.getPeso().compareTo(new BigDecimal("2.0")) < 0) {
                    System.out.println("🎉 Promoção aplicada: 50% desconto para pedidos leves");
                    return sedexBase.calculate(p).multiply(new BigDecimal("0.5"));
                }
                return sedexBase.calculate(p);
            }

            @Override
            public String toString() {
                return "Sedex com 50% desconto para pedidos leves";
            }
        });
        System.out.println("Sedex com desconto customizado: R$ " + pedido.calcularFrete());

        System.out.println();
    }

    private static void demonstrarTrocaEmTempoExecucao(Pedido pedido) {
        System.out.println("🔄 Demonstrando troca de estratégia em tempo de execução");
        System.out.println("Pedido: R$ " + pedido.getValorTotal() + " (" + pedido.getPeso() + "kg)");
        System.out.println();

        // Simulando mudança de estratégia baseada na escolha do usuário
        DeliveryFeeCalculator[] estrategias = {
                new SedexStrategy(),
                new PacStrategy(),
                FretePromocionalStrategy.Factory.freteGratisAcimaDe(
                        new PacStrategy(), new BigDecimal("200.00"))
        };

        String[] descricoes = {
                "Cliente escolheu Sedex",
                "Cliente mudou para PAC",
                "Sistema aplicou promoção automática"
        };

        for (int i = 0; i < estrategias.length; i++) {
            pedido.setCalculadoraFrete(estrategias[i]);
            System.out.println(descricoes[i] + ": R$ " + pedido.calcularFrete());

            // Simular pausa
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }

        System.out.println();
    }

    private static void demonstrarValidacaoCep() {
        System.out.println("❌ Demonstrando validação de CEP inválido");

        try {
            Pedido pedidoInvalido = new Pedido("CEP-INVÁLIDO", null,
                    new BigDecimal("100.00"), new BigDecimal("1.0"));
            pedidoInvalido.setCalculadoraFrete(new SedexStrategy());
            pedidoInvalido.calcularFrete();
        } catch (CepInvalidoException e) {
            System.out.println("Exceção capturada: " + e.getMessage());
        }

        try {
            Pedido pedidoFormatoInvalido = new Pedido("12345", null,
                    new BigDecimal("100.00"), new BigDecimal("1.0"));
            pedidoFormatoInvalido.setCalculadoraFrete(new PacStrategy());
            pedidoFormatoInvalido.calcularFrete();
        } catch (CepInvalidoException e) {
            System.out.println("Exceção capturada: " + e.getMessage());
        }

        System.out.println();
    }
}
