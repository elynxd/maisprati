public class Car implements TransportMeans {
    private double speed;
    private final double MAX_SPEEED = 200.0; // km/h
    private final double ACCELERATION_INCREMENT = 20.0; // km/h
    private final double BRAKING_INCREMENT = 25.0; // km/h
    private String model;
    
    public Car(String model) {
        this.model = model;
        this.speed = 0.0;
    }
    
    @Override
    public void accelerate() throws InvalidSpeedException {
        if (speed >= MAX_SPEEED) {
            throw new InvalidSpeedException(
                "Carro " + model + " já está na velocidade máxima de " + MAX_SPEEED + " km/h"
            );
        }
        
        double newSpeed = speed + ACCELERATION_INCREMENT;
        if (newSpeed > MAX_SPEEED) {
            speed = MAX_SPEEED;
        } else {
            speed = newSpeed;
        }
        
        System.out.printf("Carro %s acelerou para %.1f km/h%n", model, speed);
    }
    
    @Override
    public void applyBrakes() throws InvalidSpeedException {
        if (speed <= 0) {
            throw new InvalidSpeedException(
                "Carro " + model + " já está parado"
            );
        }
        
        double newSpeed = speed - BRAKING_INCREMENT;
        if (newSpeed < 0) {
            speed = 0;
        } else {
            speed = newSpeed;
        }
        
        System.out.printf("Carro %s freou para %.1f km/h%n", model, speed);
    }
    
    @Override
    public double obtainSpeed() {
        return speed;
    }
    
    @Override
    public String getName() {
        return "Carro " + model;
    }
}
