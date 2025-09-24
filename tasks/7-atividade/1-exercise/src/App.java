public class App {
    public static void main(String[] args) throws Exception {

        System.out.println("1) Criando produtos válidos: ");

        try {
            Product product1 = new Product("Notebook dell", 2890.99, 10);
            Product product2 = new Product("Monitor Samsung", 1999.70, 20);

            System.out.println("✓ " + product1);
            System.out.println("✓ " + product2);

        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        System.out.println("\n2. Alterando valores válidos:");
        try {
            Product produto = new Product("Teclado", 120.00, 15);
            System.out.println("Produto inicial: " + produto);

            produto.setName("Teclado Mecânico");
            produto.setPrice(180.00);
            produto.setQuantityAmount(20);

            System.out.println("✓ Produto após alterações: " + produto);
        } catch (IllegalArgumentException e) {
            System.out.println("✗ Erro: " + e.getMessage());
        }

        // 3. Testando validações - Nome inválido
        System.out.println("\n3. Testando validações:");

        // Nome nulo
        try {
            Product product3 = new Product(null, 100.0, 5);
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Nome nulo rejeitado: " + e.getMessage());
        }

        // Nome vazio
        try {
            Product produto = new Product("", 100.0, 5);
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Nome vazio rejeitado: " + e.getMessage());
        }

        // Nome só com espaços
        try {
            Product produto = new Product("   ", 100.0, 5);
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Nome com espaços rejeitado: " + e.getMessage());
        }

        // Preço negativo
        try {
            Product produto = new Product("Produto", -50.0, 5);
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Preço negativo rejeitado: " + e.getMessage());
        }

        // Quantidade negativa
        try {
            Product produto = new Product("Produto", 100.0, -5);
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Quantidade negativa rejeitada: " + e.getMessage());
        }

        // 4. Testando setters com valores inválidos
        System.out.println("\n4. Testando setters com valores inválidos:");
        Product produto = new Product("Produto Teste", 50.0, 10);

        try {
            produto.setPrice(-25.0);
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Setter price rejeitou valor negativo: " + e.getMessage());
        }

        try {
            produto.setQuantityAmount(-10);
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Setter quantity rejeitou valor negativo: " + e.getMessage());
        }

        try {
            produto.setName(null);
        } catch (IllegalArgumentException e) {
            System.out.println("✓ Setter name rejeitou valor nulo: " + e.getMessage());
        }
    }
}
