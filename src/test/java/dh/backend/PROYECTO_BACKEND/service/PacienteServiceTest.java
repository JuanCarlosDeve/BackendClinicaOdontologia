package dh.backend.PROYECTO_BACKEND.service;


import dh.backend.PROYECTO_BACKEND.dao.impl.PacienteDaoH2;
import dh.backend.PROYECTO_BACKEND.model.Domicilio;
import dh.backend.PROYECTO_BACKEND.model.Paciente;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class PacienteServiceTest {

    private static Logger LOGGER = LoggerFactory.getLogger(PacienteServiceTest.class);
    private static PacienteService pacienteService = new PacienteService(new PacienteDaoH2());
    @BeforeAll
    static void crearTablas(){
        Connection connection = null;
        try {
            Class.forName("org.h2.Driver");
            connection = DriverManager.getConnection("jdbc:h2:~/db_clinica_1806;INIT=RUNSCRIPT FROM 'create.sql'", "sa", "sa");
        } catch (Exception e) {
            e.printStackTrace();
            LOGGER.error(e.getMessage());
        } finally {
            try {
                connection.close();
            } catch (SQLException e) {
                LOGGER.error(e.getMessage());
            }
        }
    }

    @Test
    @DisplayName("testear que un paciente fue guardado")
    void testPacienteGuardado(){
        Paciente paciente = new Paciente("cosme",
                "mengano",
                "343443",
                LocalDate.of(2024,04,22),
                new Domicilio("calle falsa", 456, "sprinfield", "montana") );
        PacienteService pacienteService = new PacienteService(new PacienteDaoH2());
        Paciente pacienteDesdeLaBD = pacienteService.registrarPaciente(paciente);

        assertNotNull(pacienteDesdeLaBD);
    }

    @Test
    @DisplayName("Testear busqueda paciente por id")
    void testPacientePorId(){
        Integer id = 1;
        Paciente pacienteEncontrado = pacienteService.buscarPorId(id);
        assertEquals(id, pacienteEncontrado.getId());
    }

    @Test
    @DisplayName("Testear busqueda todos los pacientes")
    void testBusquedaTodos(){
        Paciente paciente = new Paciente("cosme",
                "mengano",
                "343443",
                LocalDate.of(2024,04,22),
                new Domicilio("calle falsa", 456, "sprinfield", "montana") );
        pacienteService.registrarPaciente(paciente);

        List<Paciente> pacientes = pacienteService.buscarTodos();

        assertEquals(2,pacientes.size());
    }
}


