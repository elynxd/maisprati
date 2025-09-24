import java.util.Objects;

public final class Produto {
    private final String id;
    private final String nome;
    private final String descricao;
    private final Money preco;

    public Produto(String id, String nome, String descricao, Money preco) {
        if (id == null || id.trim().isEmpty()) {
            throw new IllegalArgumentException("ID do produto não pode ser nulo ou vazio");
        }
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome do produto não pode ser nulo ou vazio");
        }
        if (preco == null) {
            throw new IllegalArgumentException("Preço do produto não pode ser nulo");
        }
        
        this.id = id.trim();
        this.nome = nome.trim();
        this.descricao = descricao != null ? descricao.trim() : "";
        this.preco = preco;
    }

    public String getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public Money getPreco() {
        return preco;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Produto produto = (Produto) obj;
        return Objects.equals(id, produto.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return String.format("Produto: id = '%s', nome = '%s', preço = %s}", id, nome, preco);
    }
}
