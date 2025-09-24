public class Bicycle implements TransportMeans {
    private double speed;
    private final double MAX_SPEED = 45.0; // km/h
    private final double ACCELERATION_INCREMENT = 5.0; // km/h
    private final double BRAKE_INCREMENT = 8.0; // km/h
    private String type;
    
    public Bicycle(String type) {
        this.type = type;
        this.speed = 0.0;
    }
    
    @Override
    public void accelerate() throws InvalidSpeedException {
        if (speed >= MAX_SPEED) {
            throw new InvalidSpeedException(
                "Bicicleta " + type + " já está na velocidade máxima de " + MAX_SPEED + " km/h"
            );
        }
        
        double newSpeed = speed + ACCELERATION_INCREMENT;
        if (newSpeed > MAX_SPEED) {
            speed = MAX_SPEED;
        } else {
            speed = newSpeed;
        }
        
        System.out.printf("Bicicleta %s acelerou para %.1f km/h%n", type, speed);
    }
    
    @Override
    public void applyBrakes() throws InvalidSpeedException {
        if (speed <= 0) {
            throw new InvalidSpeedException(
                "Bicicleta " + type + " já está parada"
            );
        }
        
        double newSpeed = speed - BRAKE_INCREMENT;
        if (newSpeed < 0) {
            speed = 0;
        } else {
            speed = newSpeed;
        }
        
        System.out.printf("Bicicleta %s freou para %.1f km/h%n", type, speed);
    }
    
    @Override
    public double obtainSpeed() {
        return speed;
    }
    
    @Override
    public String getName() {
        return "Bicicleta " + type;
    }
}
