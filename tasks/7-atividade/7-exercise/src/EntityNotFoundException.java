public class EntityNotFoundException extends Exception {
    
   public EntityNotFoundException(String errorMessage) {
        super(errorMessage);
    }

   public EntityNotFoundException(String errorMessage, Throwable cause) {
        super(errorMessage, cause);
    }
}
