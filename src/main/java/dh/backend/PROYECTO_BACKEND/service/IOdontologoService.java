package dh.backend.PROYECTO_BACKEND.service;

import dh.backend.PROYECTO_BACKEND.model.Odontologo;

import java.util.List;


public interface IOdontologoService {
    Odontologo agregarOdontologo(Odontologo odontologo);

    Odontologo buscarUnOdontologo(Integer id);
    List<Odontologo> buscarTodosOdontologos();

    void modificarOdontologo(Odontologo odontologo);
    void eliminarOdontologo(Integer id);
}