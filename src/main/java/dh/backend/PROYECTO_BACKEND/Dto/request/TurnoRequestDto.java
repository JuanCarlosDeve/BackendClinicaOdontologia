package dh.backend.PROYECTO_BACKEND.Dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TurnoRequestDto {
    private Integer paciente_id;
    private Integer odontologo_id;
    private String fecha;

}
