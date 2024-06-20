package dh.backend.PROYECTO_BACKEND.service.impl;

import dh.backend.PROYECTO_BACKEND.dao.IDao;
import dh.backend.PROYECTO_BACKEND.model.Odontologo;
import dh.backend.PROYECTO_BACKEND.service.IOdontologoService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OdontologoService implements IOdontologoService {
    private IDao<Odontologo> odontologoIDao;

    public OdontologoService(IDao<Odontologo> odontologoIDao) {
        this.odontologoIDao = odontologoIDao;
    }

    public IDao<Odontologo> getOdontologoIDao() {
        return odontologoIDao;
    }

    public void setOdontologoIDao(IDao<Odontologo> odontologoIDao) {
        this.odontologoIDao = odontologoIDao;
    }

    public Odontologo agregarOdontologo(Odontologo odontologo){
        return odontologoIDao.registrar(odontologo);
    }

    public Odontologo buscarUnOdontologo(Integer id){
        return odontologoIDao.buscarPorId(id);
    }
    public List<Odontologo> buscarTodosOdontologos(){
        return odontologoIDao.buscarTodos();
    }

    @Override
    public void modificarOdontologo(Odontologo odontologo) {
        odontologoIDao.actualizar(odontologo);
    }

    @Override
    public void eliminarOdontologo(Integer id) {
        odontologoIDao.eliminar(id);
    }
}