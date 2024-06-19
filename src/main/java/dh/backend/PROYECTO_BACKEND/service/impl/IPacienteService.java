package dh.backend.PROYECTO_BACKEND.service.impl;

import dh.backend.PROYECTO_BACKEND.model.Paciente;

import java.util.List;

public interface IPacienteService {

    Paciente registrarPaciente(Paciente paciente);

    Paciente buscarPorId(Integer id);

    List<Paciente> buscarTodos();

    void actualizarPaciente(Paciente paciente);

    void eliminarPaciente(Integer id);
}
