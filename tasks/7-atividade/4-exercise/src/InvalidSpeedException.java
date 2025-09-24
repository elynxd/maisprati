public class InvalidSpeedException extends Exception {

    public InvalidSpeedException() {
        super("Operação de velocidade inválida");
    }

    public InvalidSpeedException(String message) {
        super(message);
    }

    public InvalidSpeedException(String message, Throwable cause) {
        super(message, cause);
    }
}
