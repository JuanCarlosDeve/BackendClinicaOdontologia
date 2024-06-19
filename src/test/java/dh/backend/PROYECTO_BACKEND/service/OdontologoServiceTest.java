package dh.backend.PROYECTO_BACKEND.service;


import dh.backend.PROYECTO_BACKEND.dao.impl.OdontologoEnMemoria;
import dh.backend.PROYECTO_BACKEND.model.Odontologo;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class OdontologoServiceTest {
    private static IOdontologoService odontologoService = new IOdontologoService(new OdontologoEnMemoria()) {
        @Override
        public Odontologo agregarOdontologo(Odontologo odontologo) {
            return null;
        }

        @Override
        public Odontologo buscarUnOdontologo(int id) {
            return null;
        }

        @Override
        public List<Odontologo> buscarTodosOdontologos() {
            return List.of();
        }
    };

    @Test
    @DisplayName("Debería guardar odontologos")
    void guardarOdontologos(){
        Odontologo odontologo1 = new Odontologo(12345,"Juan","Vivas");
        Odontologo odontologo2 = new Odontologo(12343,"Enrique","Palomino");

        odontologoService.guardarOdontologo(odontologo1);
        odontologoService.guardarOdontologo(odontologo2);

        List<Odontologo> odontologos = odontologoService.buscarTodos();

        assertEquals(2, odontologos.size());
    }
}