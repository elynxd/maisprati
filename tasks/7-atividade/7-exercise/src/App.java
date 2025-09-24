import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public class App {
    public static void main(String[] args) {
        System.out.println("=== DEMONSTRAÇÃO DO REPOSITÓRIO GENÉRICO ===\n");

        demonstrarRepositorioProduto();
        System.out.println("\n" + "=".repeat(50) + "\n");
        demonstrarRepositorioFuncionario();
    }

    private static void demonstrarRepositorioProduto() {
        System.out.println("📦 REPOSITÓRIO DE PRODUTOS");

        // Criar repositório para produtos
        EntityRepository<Product, Long> repositorioProdutos = new InMemoryRepository<>();

        // Criar produtos
        Product produto1 = new Product(1L, "Notebook", "Notebook para desenvolvimento",
                new BigDecimal("2500.00"), 10);
        Product produto2 = new Product(2L, "Mouse", "Mouse sem fio",
                new BigDecimal("45.90"), 25);
        Product produto3 = new Product(3L, "Teclado", "Teclado mecânico",
                new BigDecimal("189.99"), 15);

        // Salvar produtos
        System.out.println("\n🔹 Salvando produtos:");
        repositorioProdutos.salvar(produto1);
        repositorioProdutos.salvar(produto2);
        repositorioProdutos.salvar(produto3);
        System.out.println("✅ Produtos salvos com sucesso!");

        // Listar todos os produtos
        System.out.println("\n🔹 Listando todos os produtos:");
        List<Product> todosProdutos = repositorioProdutos.listarTodos();
        todosProdutos.forEach(System.out::println);

        // Buscar produto por ID
        System.out.println("\n🔹 Buscando produto com ID 2:");
        Optional<Product> produtoEncontrado = repositorioProdutos.buscarPorId(2L);
        if (produtoEncontrado.isPresent()) {
            System.out.println("✅ Produto encontrado: " + produtoEncontrado.get());
        } else {
            System.out.println("❌ Produto não encontrado!");
        }

        // Tentar buscar produto inexistente
        System.out.println("\n🔹 Buscando produto com ID inexistente (99):");
        Optional<Product> produtoInexistente = repositorioProdutos.buscarPorId(99L);
        if (produtoInexistente.isPresent()) {
            System.out.println("✅ Produto encontrado: " + produtoInexistente.get());
        } else {
            System.out.println("❌ Produto não encontrado (como esperado)!");
        }

        // Remover produto
        System.out.println("\n🔹 Removendo produto com ID 3:");
        try {
            repositorioProdutos.removeEntity(3L);
            System.out.println("✅ Produto removido com sucesso!");
        } catch (EntityNotFoundException e) {
            System.out.println("❌ Erro ao remover produto: " + e.getMessage());
        }

        // Tentar remover produto inexistente
        System.out.println("\n🔹 Tentando remover produto inexistente (ID 99):");
        try {
            repositorioProdutos.removeEntity(99L);
            System.out.println("✅ Produto removido!");
        } catch (EntityNotFoundException e) {
            System.out.println("❌ Erro esperado: " + e.getMessage());
        }

        // Listar produtos após remoção
        System.out.println("\n🔹 Produtos restantes após remoção:");
        List<Product> produtosRestantes = repositorioProdutos.listarTodos();
        produtosRestantes.forEach(System.out::println);
    }

    private static void demonstrarRepositorioFuncionario() {
        System.out.println("👥 REPOSITÓRIO DE FUNCIONÁRIOS");

        // Criar repositório para funcionários
        EntityRepository<Employee, String> repositorioFuncionarios = new InMemoryRepository<>();

        // Criar funcionários
        Employee func1 = new Employee("123.456.789-00", "João Silva", "Desenvolvedor Senior",
                new BigDecimal("8500.00"), LocalDate.of(2020, 3, 15),
                "joao.silva@empresa.com");
        Employee func2 = new Employee("987.654.321-00", "Maria Santos", "Analista de Sistemas",
                new BigDecimal("6200.00"), LocalDate.of(2021, 7, 22),
                "maria.santos@empresa.com");
        Employee func3 = new Employee("555.666.777-88", "Pedro Costa", "Tech Lead",
                new BigDecimal("12000.00"), LocalDate.of(2019, 1, 10),
                "pedro.costa@empresa.com");

        // Salvar funcionários
        System.out.println("\n🔹 Salvando funcionários:");
        repositorioFuncionarios.salvar(func1);
        repositorioFuncionarios.salvar(func2);
        repositorioFuncionarios.salvar(func3);
        System.out.println("✅ Funcionários salvos com sucesso!");

        // Listar todos os funcionários
        System.out.println("\n🔹 Listando todos os funcionários:");
        List<Employee> todosFuncionarios = repositorioFuncionarios.listarTodos();
        todosFuncionarios.forEach(System.out::println);

        // Buscar funcionário por CPF
        System.out.println("\n🔹 Buscando funcionário com CPF '987.654.321-00':");
        Optional<Employee> funcEncontrado = repositorioFuncionarios.buscarPorId("987.654.321-00");
        if (funcEncontrado.isPresent()) {
            System.out.println("✅ Funcionário encontrado: " + funcEncontrado.get());
        } else {
            System.out.println("❌ Funcionário não encontrado!");
        }

        // Demonstrar imutabilidade da lista retornada
        System.out.println("\n🔹 Testando imutabilidade da lista:");
        List<Employee> listaFuncionarios = repositorioFuncionarios.listarTodos();
        System.out.println("📋 Tamanho original da lista: " + listaFuncionarios.size());

        try {
            // Tentar modificar a lista (deve lançar exception)
            listaFuncionarios.add(new Employee("000.000.000-00", "Teste", "Teste",
                    BigDecimal.ZERO, LocalDate.now(), "teste@test.com"));
            System.out.println("❌ ERRO: Lista deveria ser imutável!");
        } catch (UnsupportedOperationException e) {
            System.out.println("✅ Lista é imutável como esperado: " + e.getClass().getSimpleName());
        }

        // Remover funcionário
        System.out.println("\n🔹 Removendo funcionário com CPF '555.666.777-88':");
        try {
            repositorioFuncionarios.removeEntity("555.666.777-88");
            System.out.println("✅ Funcionário removido com sucesso!");
        } catch (EntityNotFoundException e) {
            System.out.println("❌ Erro ao remover funcionário: " + e.getMessage());
        }

        // Listar funcionários restantes
        System.out.println("\n🔹 Funcionários restantes:");
        List<Employee> funcionariosRestantes = repositorioFuncionarios.listarTodos();
        funcionariosRestantes.forEach(System.out::println);
    }
}
