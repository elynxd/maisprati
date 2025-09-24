import java.math.BigDecimal;
import java.util.regex.Pattern;

public class Pix extends PaymentMethods {
    private String chavePix;
    private TipoChave tipoChave;
    private String descricao;
    
    public enum TipoChave {
        CPF, CNPJ, EMAIL, TELEFONE, CHAVE_ALEATORIA
    }
    
    public Pix(String chavePix, TipoChave tipoChave, String descricao) {
        super("PIX");
        this.chavePix = chavePix;
        this.tipoChave = tipoChave;
        this.descricao = descricao != null ? descricao : "Pagamento PIX";
    }
    
    @Override
    public void validatePayment() throws InvalidPaymentException {
        if (chavePix == null || chavePix.trim().isEmpty()) {
            throw new InvalidPaymentException("Chave PIX é obrigatória");
        }
        
        if (tipoChave == null) {
            throw new InvalidPaymentException("Tipo de chave PIX é obrigatório");
        }
        
        // Validar formato da chave PIX baseado no tipo
        switch (tipoChave) {
            case CPF:
                if (!validarCPF(chavePix)) {
                    throw new InvalidPaymentException("CPF inválido como chave PIX");
                }
                break;
                
            case CNPJ:
                if (!validarCNPJ(chavePix)) {
                    throw new InvalidPaymentException("CNPJ inválido como chave PIX");
                }
                break;
                
            case EMAIL:
                if (!validarEmail(chavePix)) {
                    throw new InvalidPaymentException("Email inválido como chave PIX");
                }
                break;
                
            case TELEFONE:
                if (!validarTelefone(chavePix)) {
                    throw new InvalidPaymentException("Telefone inválido como chave PIX");
                }
                break;
                
            case CHAVE_ALEATORIA:
                if (!validarChaveAleatoria(chavePix)) {
                    throw new InvalidPaymentException("Chave aleatória PIX inválida");
                }
                break;
        }
    }
    
    @Override
    protected void executarPagamento(BigDecimal valor) {
        System.out.printf("Processando PIX no valor de R$ %.2f%n", valor);
        System.out.println("Tipo de chave: " + tipoChave);
        System.out.println("Chave: " + mascarChave());
        System.out.println("Descrição: " + descricao);
        System.out.println("Conectando com o Banco Central (SPI)...");
        System.out.println("PIX processado instantaneamente! ⚡");
    }
    
    /**
     * Validar CPF (formato simples)
     */
    private boolean validarCPF(String cpf) {
        // Remove formatação
        cpf = cpf.replaceAll("[^\\d]", "");
        
        // Deve ter 11 dígitos
        if (cpf.length() != 11) {
            return false;
        }
        
        // Verificar se todos os dígitos são iguais
        if (cpf.matches("(\\d)\\1{10}")) {
            return false;
        }
        
        return true; // Validação básica - em produção seria mais complexa
    }
    
    /**
     * Validar CNPJ (formato simples)
     */
    private boolean validarCNPJ(String cnpj) {
        // Remove formatação
        cnpj = cnpj.replaceAll("[^\\d]", "");
        
        // Deve ter 14 dígitos
        return cnpj.length() == 14 && !cnpj.matches("(\\d)\\1{13}");
    }
    
    /**
     * Validar Email
     */
    private boolean validarEmail(String email) {
        String regex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
        return Pattern.matches(regex, email);
    }
    
    /**
     * Validar Telefone (formato brasileiro)
     */
    private boolean validarTelefone(String telefone) {
        // Remove formatação
        telefone = telefone.replaceAll("[^\\d]", "");
        
        // Deve ter 10 ou 11 dígitos (com ou sem 9 no celular)
        return telefone.length() >= 10 && telefone.length() <= 11;
    }
    
    /**
     * Validar chave aleatória (UUID-like)
     */
    private boolean validarChaveAleatoria(String chave) {
        // UUID padrão tem 36 caracteres incluindo hífens
        return chave.length() >= 32 && chave.length() <= 36;
    }
    
    /**
     * Mascarar a chave para exibição
     */
    private String mascarChave() {
        switch (tipoChave) {
            case CPF:
                String cpf = chavePix.replaceAll("[^\\d]", "");
                return cpf.substring(0, 3) + ".***.***-" + cpf.substring(9);
                
            case CNPJ:
                String cnpj = chavePix.replaceAll("[^\\d]", "");
                return cnpj.substring(0, 2) + ".***.***/****-" + cnpj.substring(12);
                
            case EMAIL:
                String[] partes = chavePix.split("@");
                return partes[0].charAt(0) + "***@" + partes[1];
                
            case TELEFONE:
                String tel = chavePix.replaceAll("[^\\d]", "");
                return "(" + tel.substring(0, 2) + ") *****-" + tel.substring(tel.length() - 4);
                
            case CHAVE_ALEATORIA:
                return chavePix.substring(0, 8) + "-****-****-****";
                
            default:
                return "***";
        }
    }
    
    // Getters
    public String getChavePix() {
        return chavePix;
    }
    
    public TipoChave getTipoChave() {
        return tipoChave;
    }
    
    public String getDescricao() {
        return descricao;
    }
}
