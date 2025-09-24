public class Product {
    private String name;
    private double price;
    private int quantityAmount;

    public Product(String name, double price, int quantityAmount) {
        setName(name);
        setPrice(price);
        setQuantityAmount(quantityAmount);
    }

    public Product() {
        this("produto", 0.0, 0);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Campo nome não pode ser vazio!");
        }
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if (price < 0) {
            throw new IllegalArgumentException("Preço não pode ser negativo!");
        }
        this.price = price;
    }

    public int getQuantityAmount() {
        return quantityAmount;
    }

    public void setQuantityAmount(int quantityAmount) {
        if (quantityAmount < 0) {
            throw new IllegalArgumentException("Quantidade em estoque não pode ser menor que 0");
        }
        this.quantityAmount = quantityAmount;
    }

    @Override
    public String toString() {
        return String.format("Produto: nome = '%s', preço = %.2f, quantidade = %d",
                name, price, quantityAmount);
    }
}
