package dh.backend.PROYECTO_BACKEND.controller;

import dh.backend.PROYECTO_BACKEND.Dto.request.TurnoRequestDto;
import dh.backend.PROYECTO_BACKEND.Dto.response.TurnoResponseDto;
import dh.backend.PROYECTO_BACKEND.service.ITurnoService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;


@RestController
@RequestMapping("/turno")
public class TurnoController {
    private ITurnoService turnoService;

    public TurnoController(ITurnoService turnoService) {
        this.turnoService = turnoService;
    }

    @PostMapping
    public ResponseEntity<TurnoResponseDto> agregarTurno(@RequestBody TurnoRequestDto turno){
        TurnoResponseDto turnoADevolver = turnoService.registrar(turno);
        if(turnoADevolver==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        } else {
            return ResponseEntity.status(HttpStatus.CREATED).body(turnoADevolver);
        }
    }
    @GetMapping
    public ResponseEntity<List<TurnoResponseDto>> buscarTodosTurnos(){
        return ResponseEntity.ok(turnoService.buscarTodos());
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> modificarTurno(@PathVariable Integer id, @RequestBody TurnoRequestDto turno){
        turnoService.actualizarTurno(id, turno);
        return ResponseEntity.ok("Turno modificado");
    }
    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    @GetMapping("/fechas")
    public ResponseEntity<List<TurnoResponseDto>> buscarEntreFechas(@RequestParam String inicio, @RequestParam String fin){
        LocalDate fechaInicio = LocalDate.parse(inicio, formatter);
        LocalDate fechaFinal = LocalDate.parse(fin, formatter);

        return ResponseEntity.ok(turnoService.buscarTurnoEntreFechas(fechaInicio, fechaFinal));
    }

}