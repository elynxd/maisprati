import java.math.BigDecimal;
import java.math.RoundingMode;

public class Developer extends Employee {

    public Developer(String name, BigDecimal salary) {
        super(name, salary);
    }

    @Override
    public BigDecimal calcBonus() {
        return salary.multiply(new BigDecimal("0.10")).setScale(2, RoundingMode.HALF_UP);
    }

}
