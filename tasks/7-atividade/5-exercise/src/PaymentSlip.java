import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class PaymentSlip extends PaymentMethods {
    private String codigoBarras;
    private LocalDate dataVencimento;
    private String beneficiario;
    private String pagador;
    
    public PaymentSlip(String codigoBarras, LocalDate dataVencimento, String beneficiario, String pagador) {
        super("Boleto Bancário");
        this.codigoBarras = codigoBarras;
        this.dataVencimento = dataVencimento;
        this.beneficiario = beneficiario;
        this.pagador = pagador;
    }
    
    @Override
    public void validatePayment() throws InvalidPaymentException {
        // Validar código de barras (deve ter 44 dígitos)
        if (codigoBarras == null || !codigoBarras.matches("\\d{44}")) {
            throw new InvalidPaymentException("Código de barras deve conter exatamente 44 dígitos");
        }
        
        // Validar dígito verificador do código de barras
        if (!validarDigitoVerificador(codigoBarras)) {
            throw new InvalidPaymentException("Código de barras inválido - dígito verificador incorreto");
        }
        
        // Validar data de vencimento
        if (dataVencimento == null) {
            throw new InvalidPaymentException("Data de vencimento é obrigatória");
        }
        
        // Verificar se o boleto não está muito vencido (mais de 30 dias)
        if (dataVencimento.isBefore(LocalDate.now().minusDays(30))) {
            throw new InvalidPaymentException("Boleto vencido há mais de 30 dias não pode ser pago");
        }
        
        // Validar beneficiário
        if (beneficiario == null || beneficiario.trim().isEmpty()) {
            throw new InvalidPaymentException("Beneficiário é obrigatório");
        }
        
        // Validar pagador
        if (pagador == null || pagador.trim().isEmpty()) {
            throw new InvalidPaymentException("Pagador é obrigatório");
        }
    }
    
    @Override
    protected void executarPagamento(BigDecimal valor) {
        System.out.printf("Processando pagamento de boleto no valor de R$ %.2f%n", valor);
        System.out.println("Beneficiário: " + beneficiario);
        System.out.println("Pagador: " + pagador);
        System.out.println("Vencimento: " + dataVencimento.format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        
        if (dataVencimento.isBefore(LocalDate.now())) {
            System.out.println("⚠️  Atenção: Boleto vencido. Podem ser aplicados juros e multa.");
        }
        
        System.out.println("Conectando com o sistema bancário...");
        System.out.println("Pagamento de boleto confirmado!");
    }
    
    private boolean validarDigitoVerificador(String codigo) {
        try {
            String bancoCodigo = codigo.substring(0, 3);
            String moedaCodigo = codigo.substring(3, 4);
            String digitoVerificador = codigo.substring(4, 5);
            
            if (!bancoCodigo.matches("\\d{3}") || 
                !moedaCodigo.equals("9") || 
                !digitoVerificador.matches("\\d")) {
                return false;
            }
            
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
    public String getCodigoBarras() {
        return codigoBarras;
    }
    
    public LocalDate getDataVencimento() {
        return dataVencimento;
    }
    
    public String getBeneficiario() {
        return beneficiario;
    }
    
    public String getPagador() {
        return pagador;
    }
}
