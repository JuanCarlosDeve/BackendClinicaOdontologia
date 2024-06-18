package dh.backend.PROYECTO_BACKEND.service;



import dh.backend.PROYECTO_BACKEND.dao.IDaoPaciente;
import dh.backend.PROYECTO_BACKEND.model.Paciente;
import dh.backend.PROYECTO_BACKEND.service.impl.IPacienteService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PacienteService implements IPacienteService {
    private IDaoPaciente<Paciente> pacienteIDaoPaciente;

    public PacienteService(IDaoPaciente<Paciente> pacienteIDaoPaciente) {
        this.pacienteIDaoPaciente = pacienteIDaoPaciente;
    }
    public Paciente registrarPaciente(Paciente paciente){
        return pacienteIDaoPaciente.registrar(paciente);
    }

    public Paciente buscarPorId(Integer id){
        return pacienteIDaoPaciente.buscarPorId(id);
    }

    public List<Paciente> buscarTodos(){
        return pacienteIDaoPaciente.buscarTodos();
    }
}
