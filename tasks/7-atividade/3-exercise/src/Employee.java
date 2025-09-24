import java.math.BigDecimal;

public abstract class Employee {
    protected String name;
    protected BigDecimal salary;

    public Employee(String name, BigDecimal salary) {
        if (salary == null || salary.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Salário deve ser positivo");
        }
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getSalary() {
        return salary;
    }

    public abstract BigDecimal calcBonus();

    @Override
    public String toString() {
        return getClass().getSimpleName() + " - " + name +
                " (Salário: R$ " + salary +
                ", Bônus: R$ " + calcBonus() + ")";
    }
}
