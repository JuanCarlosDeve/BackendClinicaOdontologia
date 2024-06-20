package dh.backend.PROYECTO_BACKEND.service;
import dh.backend.PROYECTO_BACKEND.model.Turno;

import java.util.List;

public interface ITurnosService {
    Turno registrar(Turno turno);

    Turno buscarPorId(Integer id);

    List<Turno> buscarTodos();

    void actualizarTurno(Turno Turno);

    void eliminarTurno(Integer id);
}
