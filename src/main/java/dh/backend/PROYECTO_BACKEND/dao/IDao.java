package dh.backend.PROYECTO_BACKEND.dao;
import java.util.List;

public interface IDao<T> {
    T guardar(T t);
    List<T> listar();

}