package dh.backend.PROYECTO_BACKEND.service;

import dh.backend.PROYECTO_BACKEND.entity.Odontologo;

import java.util.List;
import java.util.Optional;


public interface IOdontologoService {
    Odontologo agregarOdontologo(Odontologo odontologo);

    Optional<Odontologo> buscarUnOdontologo(Integer id);
    List<Odontologo> buscarTodosOdontologos();

    void modificarOdontologo(Odontologo odontologo);
    void eliminarOdontologo(Integer id);

    List<Odontologo> buscarPorApellido(String apellido);
    List<Odontologo> buscarPorNombre(String nombre);
}