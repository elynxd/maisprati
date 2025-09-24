import java.math.BigDecimal;
import java.util.Objects;

public final class Cupom {
    public static final BigDecimal DESCONTO_MAXIMO = new BigDecimal("30.0");
    
    private final String codigo;
    private final BigDecimal percentualDesconto;
    private final String descricao;

    public Cupom(String codigo, BigDecimal percentualDesconto, String descricao) {
        if (codigo == null || codigo.trim().isEmpty()) {
            throw new IllegalArgumentException("Código do cupom não pode ser nulo ou vazio");
        }
        if (percentualDesconto == null) {
            throw new IllegalArgumentException("Percentual de desconto não pode ser nulo");
        }
        if (percentualDesconto.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Percentual de desconto deve ser maior que zero");
        }
        if (percentualDesconto.compareTo(DESCONTO_MAXIMO) > 0) {
            throw new IllegalArgumentException("Percentual de desconto não pode exceder 30%");
        }
        
        this.codigo = codigo.trim().toUpperCase();
        this.percentualDesconto = percentualDesconto;
        this.descricao = descricao != null ? descricao.trim() : "";
    }

    public Cupom(String codigo, double percentualDesconto, String descricao) {
        this(codigo, new BigDecimal(Double.toString(percentualDesconto)), descricao);
    }

    public String getCodigo() {
        return codigo;
    }

    public BigDecimal getPercentualDesconto() {
        return percentualDesconto;
    }

    public String getDescricao() {
        return descricao;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Cupom cupom = (Cupom) obj;
        return Objects.equals(codigo, cupom.codigo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(codigo);
    }

    @Override
    public String toString() {
        return String.format("Cupom{codigo='%s', desconto=%s%%, descricao='%s'}", 
                           codigo, percentualDesconto, descricao);
    }
}
