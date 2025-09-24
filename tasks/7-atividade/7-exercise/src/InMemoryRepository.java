import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class InMemoryRepository<T extends IdentifiableEntity<ID>, ID> implements EntityRepository<T, ID> {

    private final Map<ID, T> storage;

    public InMemoryRepository() {
        this.storage = new ConcurrentHashMap<>();
    }

    @Override
    public T salvar(T entidade) {
        if (entidade == null) {
            throw new IllegalArgumentException("Entidade não pode ser null");
        }
        if (entidade.getId() == null) {
            throw new IllegalArgumentException("ID da entidade não pode ser null");
        }

        storage.put(entidade.getId(), entidade);
        return entidade;
    }

    @Override
    public Optional<T> buscarPorId(ID id) {
        if (id == null) {
            return Optional.empty();
        }
        return Optional.ofNullable(storage.get(id));
    }

    @Override
    public List<T> listarTodos() {
        // Retorna uma cópia imutável da lista de valores
        return Collections.unmodifiableList(new ArrayList<>(storage.values()));
    }

    @Override
    public void removeEntity(ID id) throws EntityNotFoundException {
        if (id == null) {
            throw new EntityNotFoundException("ID não pode ser null");
        }

        T entidadeRemovida = storage.remove(id);
        if (entidadeRemovida == null) {
            throw new EntityNotFoundException("Entidade com ID " + id + " não foi encontrada");
        }
    }

    public int size() {
        return storage.size();
    }

    public boolean isEmpty() {
        return storage.isEmpty();
    }

    public void clear() {
        storage.clear();
    }
}
