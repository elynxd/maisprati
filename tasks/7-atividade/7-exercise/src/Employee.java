import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;

public class Employee implements IdentifiableEntity<String> {
    private String id; // CPF como ID
    private String nome;
    private String cargo;
    private BigDecimal salario;
    private LocalDate dataAdmissao;
    private String email;

    public Employee() {
    }

    public Employee(String id, String nome, String cargo, BigDecimal salario,
            LocalDate dataAdmissao, String email) {
        this.id = id;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.dataAdmissao = dataAdmissao;
        this.email = email;
    }

    @Override
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public void setSalario(BigDecimal salario) {
        this.salario = salario;
    }

    public LocalDate getDataAdmissao() {
        return dataAdmissao;
    }

    public void setDataAdmissao(LocalDate dataAdmissao) {
        this.dataAdmissao = dataAdmissao;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Employee that = (Employee) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return String.format("Funcionario: { id='%s', nome='%s', cargo='%s', salario=%s, dataAdmissao=%s, email='%s' }",
                id, nome, cargo, salario, dataAdmissao, email);
    }
}
