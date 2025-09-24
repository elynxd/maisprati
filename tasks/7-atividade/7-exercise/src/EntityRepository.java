import java.util.List;
import java.util.Optional;

public interface EntityRepository<T extends IdentifiableEntity<ID>, ID> {

    T salvar(T entidade);

    Optional<T> buscarPorId(ID id);

    List<T> listarTodos();

    void removeEntity(ID id) throws EntityNotFoundException;
}
