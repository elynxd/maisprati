import java.util.*;
import java.util.stream.Collectors;

public final class ShoppingCart {
    private final List<ShoppingCartItem> cartItems;
    private final Cupom appliedCoupon;
    private final Money subtotal;
    private final Money discountValue;
    private final Money total;

    public ShoppingCart() {
        this(Collections.emptyList(), null);
    }

    private ShoppingCart(List<ShoppingCartItem> itens, Cupom cupomAplicado) {
        this.cartItems = Collections.unmodifiableList(new ArrayList<>(itens));
        this.appliedCoupon = cupomAplicado;
        this.subtotal = calculateSubtotal();
        this.discountValue = calculateDiscount();
        this.total = subtotal.subtrair(discountValue);
    }

    public ShoppingCart appendProduct(Produto produto, int quantidade) {
        if (produto == null) {
            throw new IllegalArgumentException("Produto não pode ser nulo");
        }
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade deve ser maior que zero");
        }

        List<ShoppingCartItem> newItems = new ArrayList<>(this.cartItems);
        boolean isProductFound = false;

        for (int i = 0; i < newItems.size(); i++) {
            ShoppingCartItem item = newItems.get(i);
            if (item.getProduto().equals(produto)) {
                newItems.set(i, item.incrementarQuantidade(quantidade));
                isProductFound = true;
                break;
            }
        }

        if (!isProductFound) {
            newItems.add(new ShoppingCartItem(produto, quantidade));
        }

        return new ShoppingCart(newItems, this.appliedCoupon);
    }

    public ShoppingCart removerProduto(Produto produto) {
        if (produto == null) {
            throw new IllegalArgumentException("Produto não pode ser nulo");
        }

        List<ShoppingCartItem> novosItens = this.cartItems.stream()
                .filter(item -> !item.getProduto().equals(produto))
                .collect(Collectors.toList());

        return new ShoppingCart(novosItens, this.appliedCoupon);
    }

    public ShoppingCart alterarQuantidadeProduto(Produto produto, int novaQuantidade) {
        if (produto == null) {
            throw new IllegalArgumentException("Produto não pode ser nulo");
        }
        if (novaQuantidade <= 0) {
            throw new IllegalArgumentException("Quantidade deve ser maior que zero");
        }

        List<ShoppingCartItem> newItems = new ArrayList<>(this.cartItems);
        boolean isProductFound = false;

        for (int i = 0; i < newItems.size(); i++) {
            ShoppingCartItem item = newItems.get(i);
            if (item.getProduto().equals(produto)) {
                newItems.set(i, item.alterarQuantidade(novaQuantidade));
                isProductFound = true;
                break;
            }
        }

        if (!isProductFound) {
            throw new IllegalArgumentException("Produto não encontrado no carrinho");
        }

        return new ShoppingCart(newItems, this.appliedCoupon);
    }

    public ShoppingCart applyCoupon(Cupom cupom) {
        if (cupom == null) {
            throw new IllegalArgumentException("Cupom não pode ser nulo");
        }
        if (this.cartItems.isEmpty()) {
            throw new IllegalArgumentException("Não é possível aplicar cupom a carrinho vazio");
        }

        return new ShoppingCart(this.cartItems, cupom);
    }

    public ShoppingCart removeCoupon() {
        return new ShoppingCart(this.cartItems, null);
    }

    public ShoppingCart clear() {
        return new ShoppingCart();
    }

    public List<ShoppingCartItem> getCartItems() {
        return cartItems;
    }

    public Cupom getAppliedCoupon() {
        return appliedCoupon;
    }

    public Money getSubtotal() {
        return subtotal;
    }

    public Money getDiscountValue() {
        return discountValue;
    }

    public Money getTotal() {
        return total;
    }

    public boolean isEmpty() {
        return cartItems.isEmpty();
    }

    public int getQuantityItems() {
        return cartItems.stream().mapToInt(ShoppingCartItem::getQuantidade).sum();
    }

    public boolean hasProduct(Produto produto) {
        return cartItems.stream().anyMatch(item -> item.getProduto().equals(produto));
    }

    public Optional<ShoppingCartItem> retrieveItem(Produto produto) {
        return cartItems.stream()
                .filter(item -> item.getProduto().equals(produto))
                .findFirst();
    }

    private Money calculateSubtotal() {
        if (cartItems.isEmpty()) {
            return new Money("0", Currency.BRL);
        }

        Money soma = cartItems.get(0).getSubtotal();
        for (int i = 1; i < cartItems.size(); i++) {
            soma = soma.somar(cartItems.get(i).getSubtotal());
        }
        return soma;
    }

    private Money calculateDiscount() {
        if (appliedCoupon == null || subtotal.isZero()) {
            return new Money("0", subtotal.getMoeda());
        }

        return subtotal.applyDiscount(appliedCoupon.getPercentualDesconto());
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        ShoppingCart carrinho = (ShoppingCart) obj;
        return Objects.equals(cartItems, carrinho.cartItems) &&
                Objects.equals(appliedCoupon, carrinho.appliedCoupon);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cartItems, appliedCoupon);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Carrinho{\n");
        sb.append("  Itens:\n");
        for (ShoppingCartItem item : cartItems) {
            sb.append("    ").append(item).append("\n");
        }
        if (appliedCoupon != null) {
            sb.append("  Cupom: ").append(appliedCoupon).append("\n");
        }
        sb.append("  Subtotal: ").append(subtotal).append("\n");
        sb.append("  Desconto: ").append(discountValue).append("\n");
        sb.append("  Total: ").append(total).append("\n");
        sb.append("}");
        return sb.toString();
    }
}
