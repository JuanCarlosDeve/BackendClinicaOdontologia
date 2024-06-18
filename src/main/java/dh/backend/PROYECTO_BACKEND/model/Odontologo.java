package dh.backend.PROYECTO_BACKEND.model;

public class Odontologo {
    private Integer id;
    private int numMatricula;
    private String nombre;
    private String Apellido;

    public Odontologo(Integer id, int numMatricula, String nombre, String apellido) {
        this.id = id;
        this.numMatricula = numMatricula;
        this.nombre = nombre;
        Apellido = apellido;
    }
    public Odontologo( int numMatricula, String nombre, String apellido) {
        this.numMatricula = numMatricula;
        this.nombre = nombre;
        Apellido = apellido;
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getNumMatricula() {
        return numMatricula;
    }

    public void setNumMatricula(int numMatricula) {
        this.numMatricula = numMatricula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String apellido) {
        Apellido = apellido;
  } @Override
    public String toString() {
        return "Odontologo{" +
                "id=" + id + // Añadido id al toString
                ", numMatricula=" + numMatricula +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + Apellido + '\'' +
                '}';
    }
}


