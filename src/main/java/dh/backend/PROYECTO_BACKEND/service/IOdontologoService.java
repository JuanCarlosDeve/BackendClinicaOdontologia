package dh.backend.PROYECTO_BACKEND.service;

import dh.backend.PROYECTO_BACKEND.model.Odontologo;

import java.util.List;


public interface IOdontologoService {
    Odontologo agregarOdontologo(Odontologo odontologo);
    Odontologo buscarUnOdontologo(int id);
    List<Odontologo> buscarTodosOdontologos();
}
