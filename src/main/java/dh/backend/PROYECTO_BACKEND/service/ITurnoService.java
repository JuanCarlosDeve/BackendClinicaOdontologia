package dh.backend.PROYECTO_BACKEND.service;
import dh.backend.PROYECTO_BACKEND.Dto.request.TurnoRequestDto;
import dh.backend.PROYECTO_BACKEND.Dto.response.TurnoResponseDto;

import java.time.LocalDate;
import java.util.List;

public interface ITurnoService {
    TurnoResponseDto registrar(TurnoRequestDto turnoRequestDto);

    TurnoResponseDto buscarPorId(Integer id);

    List<TurnoResponseDto> buscarTodos();
    void actualizarTurno(Integer id, TurnoRequestDto turnoRequestDto);
    void eliminarTurno(Integer id);
    // HQL
    List<TurnoResponseDto> buscarTurnoEntreFechas(LocalDate startDate, LocalDate endDate);
}