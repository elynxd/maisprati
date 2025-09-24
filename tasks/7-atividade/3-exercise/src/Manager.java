import java.math.BigDecimal;
import java.math.RoundingMode;

public class Manager extends Employee {

    public Manager(String name, BigDecimal salary) {
        super(name, salary);
    }

    @Override
    public BigDecimal calcBonus() {
        return salary.multiply(new BigDecimal("0.20")).setScale(2, RoundingMode.HALF_UP);
    }

}
