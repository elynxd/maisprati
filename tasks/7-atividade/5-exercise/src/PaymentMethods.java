import java.math.BigDecimal;

public abstract class PaymentMethods {
    protected String identificador;
    
    public PaymentMethods(String identificador) {
        this.identificador = identificador;
    }
    
    public abstract void validatePayment() throws InvalidPaymentException;
    
        public final void processPayment(BigDecimal valor) throws InvalidPaymentException {
        // Primeiro valida os dados da forma de pagamento
        validatePayment();
        
        if (valor == null || valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new InvalidPaymentException("Valor deve ser maior que zero");
        }
        
        executarPagamento(valor);
        
        System.out.println("Pagamento processado com sucesso!");
    }
    
    protected abstract void executarPagamento(BigDecimal valor);
    
    public String getIdentificador() {
        return identificador;
    }
}
