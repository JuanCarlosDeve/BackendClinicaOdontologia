package dh.backend.PROYECTO_BACKEND.service;



import dh.backend.PROYECTO_BACKEND.entity.Domicilio;
import dh.backend.PROYECTO_BACKEND.entity.Paciente;
import dh.backend.PROYECTO_BACKEND.service.impl.PacienteService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PacienteServiceTest {
    private static Logger LOGGER = LoggerFactory.getLogger(PacienteServiceTest.class);
    @Autowired
    private PacienteService pacienteService;
    private Paciente paciente;

    @BeforeEach
    void setUp(){
        paciente = new Paciente();
        paciente.setNombre("Test001");
        paciente.setApellido("Cosmetest");
        paciente.setDni("434324324");
        paciente.setFechaIngreso(LocalDate.of(2024,01,12));
        Domicilio domicilio = new Domicilio();
        domicilio.setCalle("Calle no existe");
        domicilio.setNumero(123456);
        domicilio.setLocalidad("San luis");
        domicilio.setProvincia("Juliaca");
        paciente.setDomicilio(domicilio);
    }


    @Test
    @DisplayName("Testear que un paciente fue guardado")
    void testPacienteGuardado(){
        Paciente pacienteDesdeLaBD = pacienteService.registrarPaciente(paciente);

        assertNotNull(pacienteDesdeLaBD);
    }

    @Test
    @DisplayName("Testear busqueda paciente por id")
    void testPacientePorId(){
        Integer id = 1;
        Optional<Paciente> pacienteEncontrado = pacienteService.buscarPorId(id);
        Paciente paciente1 = pacienteEncontrado.get();

        assertEquals(id, paciente1.getId());
    }

    @Test
    @DisplayName("Testear busqueda todos los pacientes")
    void testBusquedaTodos() {

        List<Paciente> pacientes = pacienteService.buscarTodos();

        assertTrue(pacientes.size()!=0);

    }


}