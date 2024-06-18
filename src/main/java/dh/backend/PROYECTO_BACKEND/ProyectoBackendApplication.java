package dh.backend.PROYECTO_BACKEND;

import dh.backend.PROYECTO_BACKEND.db.H2Connection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProyectoBackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(ProyectoBackendApplication.class, args);

		H2Connection.crearTablas();
	}
}
