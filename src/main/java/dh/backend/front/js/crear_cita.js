const apiURL = "http://localhost:8080";

document.addEventListener("DOMContentLoaded", function () {
    const pacienteSelect = document.getElementById("pacienteSelect");
    const odontologoSelect = document.getElementById("odontologoSelect");
    const crearCitaForm = document.getElementById("crearCitaForm");

 
    function cargarPacientes() {
        fetch(`${apiURL}/paciente`)
            .then(response => response.json())
            .then(data => {
                data.forEach(paciente => {
                    const option = document.createElement("option");
                    option.value = paciente.id;
                    option.textContent = `${paciente.nombre} ${paciente.apellido}`;
                    pacienteSelect.appendChild(option);
                });
            })
            .catch(error => console.error("Error al cargar pacientes:", error));
    }

  
    function cargarOdontologos() {
        fetch(`${apiURL}/odontologo`)
            .then(response => response.json())
            .then(data => {
                data.forEach(odontologo => {
                    const option = document.createElement("option");
                    option.value = odontologo.id;
                    option.textContent = `${odontologo.nombre} ${odontologo.apellido}`;
                    odontologoSelect.appendChild(option);
                });
            })
            .catch(error => console.error("Error al cargar odontólogos:", error));
    }

   
    cargarPacientes();
    cargarOdontologos();


    crearCitaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const pacienteId = pacienteSelect.value;
        const odontologoId = odontologoSelect.value;
        const fecha = document.getElementById("fechaCita").value;

        const datosCita = {
            pacienteId: parseInt(pacienteId),
            odontologoId: parseInt(odontologoId),
            fecha: fecha
        };

        fetch(`${apiURL}/turno`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datosCita),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al crear la cita');
            }
            return response.json();
        })
        .then(data => {
            alert("Cita creada con éxito");
            crearCitaForm.reset();
        
        })
        .catch(error => console.error("Error al crear la cita:", error));
    });

    
    
});
