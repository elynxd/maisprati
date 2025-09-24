public class CepInvalidoException extends RuntimeException {

    public CepInvalidoException(String cep) {
        super("CEP inválido: " + cep);
    }

    public CepInvalidoException(String cep, String cause) {
        super("CEP inválido: " + cep + " - " + cause);
    }
}
