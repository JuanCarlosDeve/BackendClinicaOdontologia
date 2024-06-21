package dh.backend.PROYECTO_BACKEND.Dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class OdontologoResponseDto {
    private Integer id;
    private String nroMatricula;
    private String nombre;
    private String apellido;
}
