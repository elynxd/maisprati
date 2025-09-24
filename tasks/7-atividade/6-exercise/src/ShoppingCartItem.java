import java.util.Objects;

public final class ShoppingCartItem {
    private final Produto produto;
    private final int quantidade;
    private final Money subtotal;

    public ShoppingCartItem(Produto produto, int quantidade) {
        if (produto == null) {
            throw new IllegalArgumentException("Produto não pode ser nulo");
        }
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade deve ser maior que zero");
        }

        this.produto = produto;
        this.quantidade = quantidade;
        this.subtotal = produto.getPreco().multiplicar(quantidade);
    }

    public Produto getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public Money getSubtotal() {
        return subtotal;
    }

    public ShoppingCartItem alterarQuantidade(int novaQuantidade) {
        return new ShoppingCartItem(this.produto, novaQuantidade);
    }

    public ShoppingCartItem incrementarQuantidade(int incremento) {
        if (incremento <= 0) {
            throw new IllegalArgumentException("Incremento deve ser maior que zero");
        }
        return new ShoppingCartItem(this.produto, this.quantidade + incremento);
    }

    public ShoppingCartItem decrementarQuantidade(int decremento) {
        if (decremento <= 0) {
            throw new IllegalArgumentException("Decremento deve ser maior que zero");
        }
        int novaQuantidade = this.quantidade - decremento;
        if (novaQuantidade <= 0) {
            throw new IllegalArgumentException("Quantidade resultante deve ser maior que zero");
        }
        return new ShoppingCartItem(this.produto, novaQuantidade);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        ShoppingCartItem that = (ShoppingCartItem) obj;
        return quantidade == that.quantidade &&
                Objects.equals(produto, that.produto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(produto, quantidade);
    }

    @Override
    public String toString() {
        return String.format("ItemCarrinho{produto=%s, quantidade=%d, subtotal=%s}",
                produto, quantidade, subtotal);
    }
}
