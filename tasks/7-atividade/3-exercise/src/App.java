import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class App {
    public static void main(String[] args) throws Exception {

        List<Employee> employees = new ArrayList<>();

        try {
            employees.add(new Manager("Steve Jobs", new BigDecimal("80000")));
            employees.add(new Developer("Filipe Deschamps", new BigDecimal("70000")));
            employees.add(new Developer("Linus Torvalds", new BigDecimal("50000")));
            employees.add(new Developer("James Gosling", new BigDecimal("40000")));
            employees.add(new Developer("DHH - David Heinemeier Hansson", new BigDecimal("30000")));

            System.out.println("Relatório de Funcionários e bonificações:\n");

            BigDecimal totalBonus = BigDecimal.ZERO;

            for (Employee employee : employees) {
                System.out.println(employee);
                totalBonus = totalBonus.add(employee.calcBonus());
            }

            System.out.println("\n" + "=".repeat(40));
            System.out.println("Total de bonificações a pagar: " + totalBonus);
            System.out.println("Quantidade de funcionários: " + employees.size());

            System.out.println("\nTestando validações.");
            try {
                new Manager("Teste inválido", new BigDecimal("-30000"));
            } catch (IllegalArgumentException e) {
                System.out.println("Erro ao adicionar funcionário: " + e.getMessage());
            }

        } catch (Exception e) {
            System.out.println("Erro no programa: " + e.getMessage());
        }
    }
}
