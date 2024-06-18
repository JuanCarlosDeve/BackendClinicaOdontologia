package dh.backend.PROYECTO_BACKEND.dao.impl;



import dh.backend.PROYECTO_BACKEND.dao.IDao;
import dh.backend.PROYECTO_BACKEND.model.Odontologo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

public class OdontologoEnMemoria implements IDao<Odontologo> {
    private Logger LOGGER = LoggerFactory.getLogger(OdontologoEnMemoria.class);
    private List<Odontologo> odontologos = new ArrayList<>();

    @Override
    public Odontologo guardar(Odontologo odontologo) {
        Integer id = odontologos.size() + 1;
        odontologo.setId(id);  // Establece el id del odontólogo

        odontologos.add(odontologo);
        LOGGER.info("Odontólogo guardado: " + odontologo);
        return odontologo;
    }

    @Override
    public List<Odontologo> listar() {
        return odontologos;
    }
}
