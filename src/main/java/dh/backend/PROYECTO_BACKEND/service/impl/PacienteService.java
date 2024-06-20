package dh.backend.PROYECTO_BACKEND.service.impl;


import dh.backend.PROYECTO_BACKEND.dao.IDao;
import dh.backend.PROYECTO_BACKEND.model.Paciente;
import dh.backend.PROYECTO_BACKEND.service.IPacienteService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacienteService implements IPacienteService {
    private final IDao<Paciente> pacienteIDaoPaciente;

    public PacienteService(IDao<Paciente> pacienteIDaoPaciente) {
        this.pacienteIDaoPaciente = pacienteIDaoPaciente;
    }

    @Override
    public Paciente registrarPaciente(Paciente paciente) {
        return pacienteIDaoPaciente.registrar(paciente);
    }

    @Override
    public Paciente buscarPorId(Integer id) {
        return pacienteIDaoPaciente.buscarPorId(id);
    }

    @Override
    public List<Paciente> buscarTodos() {
        return pacienteIDaoPaciente.buscarTodos();
    }

    @Override
    public void actualizarPaciente(Paciente paciente) {
        pacienteIDaoPaciente.actualizar(paciente);
    }

    @Override
    public void eliminarPaciente(Integer id) {

        pacienteIDaoPaciente.eliminar(id);
    }
}
