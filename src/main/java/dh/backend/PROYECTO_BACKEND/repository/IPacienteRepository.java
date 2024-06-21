package dh.backend.PROYECTO_BACKEND.repository;

import dh.backend.PROYECTO_BACKEND.entity.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPacienteRepository extends JpaRepository<Paciente, Integer> {

}
