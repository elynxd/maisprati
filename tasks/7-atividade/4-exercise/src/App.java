import java.util.ArrayList;
import java.util.List;

public class App {
    public static void main(String[] args) {

        List<TransportMeans> vehicleOption = new ArrayList<>();
        vehicleOption.add(new Car("Civic"));
        vehicleOption.add(new Bicycle("Mountain Bike"));
        vehicleOption.add(new Train("Expresso"));

        System.out.println("--- Acelerando todos os veículos ---");
        for (TransportMeans vehicle : vehicleOption) {
            try {
                System.out.println("\n" + vehicle.getName() + ":");
                for (int i = 0; i < 3; i++) {
                    vehicle.accelerate();
                }
            } catch (InvalidSpeedException e) {
                System.err.println("Erro: " + e.getMessage());
            }
        }

        System.out.println("\n--- Freando todos os veículos ---");
        for (TransportMeans vehicle : vehicleOption) {
            try {
                System.out.println("\n" + vehicle.getName() + ":");
                while (vehicle.obtainSpeed() > 0) {
                    vehicle.applyBrakes();
                }
                vehicle.applyBrakes();
            } catch (InvalidSpeedException e) {
                System.err.println("Erro: " + e.getMessage());
            }
        }

        System.out.println("\n--- Teste de Limite de Velocidade ---");
        TransportMeans car = new Car("Ferrari");
        try {
            System.out.println("\nTestando limite do " + car.getName() + ":");
            for (int i = 0; i < 15; i++) {
                car.accelerate();
            }
        } catch (InvalidSpeedException e) {
            System.err.println("Erro: " + e.getMessage());
        }

        System.out.println("\n--- Status Final dos Veículos ---");
        vehicleOption.add(car); // Adicionar o carro do teste
        for (TransportMeans vehicle : vehicleOption) {
            System.out.printf("%s - Velocidade: %.1f km/h%n",
                    vehicle.getName(), vehicle.obtainSpeed());
        }
    }
}
