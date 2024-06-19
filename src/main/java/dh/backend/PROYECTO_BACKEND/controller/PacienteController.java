package dh.backend.PROYECTO_BACKEND.controller;

import dh.backend.PROYECTO_BACKEND.model.Paciente;
import dh.backend.PROYECTO_BACKEND.service.impl.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paciente")
public class PacienteController {

    private final IPacienteService pacienteService;

    @Autowired
    public PacienteController(IPacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }

    @PostMapping
    public Paciente registrarPaciente(@RequestBody Paciente paciente){
        return pacienteService.registrarPaciente(paciente);
    }

    @GetMapping
    public List<Paciente> buscarTodos(){
        return pacienteService.buscarTodos();
    }

    @GetMapping("/{id}")
    public Paciente buscarPacientePorId(@PathVariable Integer id){
        return pacienteService.buscarPorId(id);
    }

    @PutMapping("/{id}")
    public String actualizarPaciente(@PathVariable Integer id, @RequestBody Paciente paciente){
        paciente.setId(id);
        pacienteService.actualizarPaciente(paciente);
        return "Paciente actualizado correctamente";
    }

    @DeleteMapping("/{id}")
    public String borrarPaciente(@PathVariable Integer id){
        pacienteService.eliminarPaciente(id);
        return "Paciente eliminado correctamente";
    }
}
