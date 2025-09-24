import java.math.BigDecimal;

public interface DeliveryFeeCalculator {
   BigDecimal calculate(Pedido pedido);
}
