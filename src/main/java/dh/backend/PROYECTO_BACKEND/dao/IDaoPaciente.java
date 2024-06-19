package dh.backend.PROYECTO_BACKEND.dao;
import java.util.List;

public interface IDaoPaciente<T> {
    T registrar(T t);
    T buscarPorId(Integer id);
    List<T> buscarTodos();
    void actualizar(T t);
    void eliminar(Integer id);
}
