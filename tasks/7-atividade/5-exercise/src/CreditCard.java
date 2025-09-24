import java.math.BigDecimal;
import java.time.LocalDate;

public class CreditCard extends PaymentMethods {
    private String numeroCartao;
    private String nomePortador;
    private String dataValidade;
    private String cvv;
    
    public CreditCard(String numeroCartao, String nomePortador, String dataValidade, String cvv) {
        super("Cartão de Crédito");
        this.numeroCartao = numeroCartao;
        this.nomePortador = nomePortador;
        this.dataValidade = dataValidade;
        this.cvv = cvv;
    }
    
    @Override
    public void validatePayment() throws InvalidPaymentException {
        // Validar número do cartão (deve ter 16 dígitos)
        if (numeroCartao == null || !numeroCartao.matches("\\d{16}")) {
            throw new InvalidPaymentException("Número do cartão deve conter exatamente 16 dígitos");
        }
        
        // Validar algoritmo de Luhn (validação básica de cartão)
        if (!validarLuhn(numeroCartao)) {
            throw new InvalidPaymentException("Número do cartão inválido");
        }
        
        // Validar nome do portador
        if (nomePortador == null || nomePortador.trim().isEmpty()) {
            throw new InvalidPaymentException("Nome do portador é obrigatório");
        }
        
        // Validar data de validade (formato MM/yy)
        if (dataValidade == null || !dataValidade.matches("\\d{2}/\\d{2}")) {
            throw new InvalidPaymentException("Data de validade deve estar no formato MM/yy");
        }
        
        // Verificar se o cartão não está vencido
        try {
            String[] partes = dataValidade.split("/");
            int mes = Integer.parseInt(partes[0]);
            int ano = Integer.parseInt(partes[1]) + 2000; // Assumindo século 21
            
            if (mes < 1 || mes > 12) {
                throw new InvalidPaymentException("Mês inválido na data de validade");
            }
            
            LocalDate validade = LocalDate.of(ano, mes, 1).plusMonths(1).minusDays(1);
            if (validade.isBefore(LocalDate.now())) {
                throw new InvalidPaymentException("Cartão vencido");
            }
        } catch (NumberFormatException e) {
            throw new InvalidPaymentException("Data de validade inválida", e);
        }
        
        // Validar CVV (3 dígitos)
        if (cvv == null || !cvv.matches("\\d{3}")) {
            throw new InvalidPaymentException("CVV deve conter exatamente 3 dígitos");
        }
    }
    
    @Override
    protected void executarPagamento(BigDecimal valor) {
        System.out.printf("Processando pagamento de R$ %.2f no cartão **** **** **** %s%n", 
                         valor, numeroCartao.substring(12));
        System.out.println("Portador: " + nomePortador);
        System.out.println("Conectando com a operadora do cartão...");
        System.out.println("Transação autorizada!");
    }
    
    private boolean validarLuhn(String numero) {
        int soma = 0;
        boolean alternar = false;
        
        for (int i = numero.length() - 1; i >= 0; i--) {
            int digito = Character.getNumericValue(numero.charAt(i));
            
            if (alternar) {
                digito *= 2;
                if (digito > 9) {
                    digito = digito % 10 + digito / 10;
                }
            }
            
            soma += digito;
            alternar = !alternar;
        }
        
        return soma % 10 == 0;
    }
    
    public String getNumeroCartao() {
        return "**** **** **** " + numeroCartao.substring(12);
    }
    
    public String getNomePortador() {
        return nomePortador;
    }
}
