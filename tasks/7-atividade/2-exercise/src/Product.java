public class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if (price < 0) {
            throw new IllegalArgumentException("O preço não pode ser negativo!");
        }
        this.price = price;
    }

    public void applyDiscount(double percentage) throws DescontoInvalidoException {
        if (percentage < 0 || percentage > 50) {
            throw new DescontoInvalidoException(
                    "Porcentagem de desconto deve estar entre 0 e 50%. Valor informado: " + percentage + "%");
        }
        double desconto = price * (percentage / 100);
        price -= desconto;
    }

    @Override
    public String toString() {
        return String.format("Produto: nome = '%s, preço = R$ %.2f", name, price);
    }

}
