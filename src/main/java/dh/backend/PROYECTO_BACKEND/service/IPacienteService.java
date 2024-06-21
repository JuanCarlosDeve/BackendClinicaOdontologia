package dh.backend.PROYECTO_BACKEND.service;

import dh.backend.PROYECTO_BACKEND.entity.Paciente;

import java.util.List;
import java.util.Optional;

public interface IPacienteService {

    Paciente registrarPaciente(Paciente paciente);

    Optional<Paciente> buscarPorId(Integer id);

    List<Paciente> buscarTodos();
    void actualizarPaciente(Paciente paciente);
    void eliminarPaciente(Integer id);
}
