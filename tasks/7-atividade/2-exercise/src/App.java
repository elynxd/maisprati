public class App {
    public static void main(String[] args) throws Exception {
        
        Product produto1 = new Product("Processador Xeon", 2500.00);
        Product produto2 = new Product("Memoria RAM", 900.00);
        Product produto3 = new Product("HD SAS", 1200.00);
        
        // Teste 1: Desconto válido (20%)
        System.out.println("--- Teste 1: Desconto Válido (20%) ---");
        System.out.println("Produto antes do desconto: " + produto1);
        try {
            produto1.applyDiscount(20.0);
            System.out.println("Produto após desconto de 20%: " + produto1);
        } catch (DescontoInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }
        
        // Teste 2: Desconto no limite máximo (50%)
        System.out.println("\n--- Teste 2: Desconto Máximo Permitido (50%) ---");
        System.out.println("Produto antes do desconto: " + produto2);
        try {
            produto2.applyDiscount(50.0);
            System.out.println("Produto após desconto de 50%: " + produto2);
        } catch (DescontoInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }
        
        // Teste 3: Desconto no limite mínimo (0%)
        System.out.println("\n--- Teste 3: Desconto Mínimo (0%) ---");
        System.out.println("Produto antes do desconto: " + produto3);
        try {
            produto3.applyDiscount(0.0);
            System.out.println("Produto após desconto de 0%: " + produto3);
        } catch (DescontoInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }
        
        // Teste 4: Tentativa de desconto inválido (acima de 50%)
        System.out.println("\n--- Teste 4: Desconto Inválido (75%) ---");
        Product produto4 = new Product("Smartphone", 1200.00);
        System.out.println("Produto antes da tentativa: " + produto4);
        try {
            produto4.applyDiscount(75.0);
            System.out.println("Produto após desconto: " + produto4);
        } catch (DescontoInvalidoException e) {
            System.out.println("Erro capturado: " + e.getMessage());
            System.out.println("Produto permanece inalterado: " + produto4);
        }
        
        // Teste 5: Tentativa de desconto negativo
        System.out.println("\n--- Teste 5: Desconto Negativo (-10%) ---");
        Product produto5 = new Product("Headset", 300.00);
        System.out.println("Produto antes da tentativa: " + produto5);
        try {
            produto5.applyDiscount(-10.0);
            System.out.println("Produto após desconto: " + produto5);
        } catch (DescontoInvalidoException e) {
            System.out.println("Erro capturado: " + e.getMessage());
            System.out.println("Produto permanece inalterado: " + produto5);
        }
        
        // Teste 6: Múltiplos descontos válidos
        System.out.println("\n--- Teste 6: Múltiplos Descontos ---");
        Product produto6 = new Product("Monitor", 800.00);
        System.out.println("Produto inicial: " + produto6);
        try {
            produto6.applyDiscount(10.0);
            System.out.println("Após 1º desconto (10%): " + produto6);
            produto6.applyDiscount(15.0);
            System.out.println("Após 2º desconto (15%): " + produto6);
        } catch (DescontoInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
