public interface TransportMeans {
    void accelerate() throws InvalidSpeedException;

    void applyBrakes() throws InvalidSpeedException;

    double obtainSpeed();

    String getName();
}
