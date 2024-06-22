const apiURL = "http://localhost:8080";

document.addEventListener("DOMContentLoaded", function () {
    const pacienteSelect = document.getElementById("pacienteSelect");
    const odontologoSelect = document.getElementById("odontologoSelect");
    const crearCitaForm = document.getElementById("crearCitaForm");

    // Función para cargar y mostrar pacientes en el select
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

    // Función para cargar y mostrar odontólogos en el select
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

    // Cargar pacientes y odontólogos al inicio
    cargarPacientes();
    cargarOdontologos();

    // Manejar el envío del formulario de creación de cita
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
            mostrarCitaCreada(data);
        })
        .catch(error => console.error("Error al crear la cita:", error));
    });

    // Función para mostrar la cita recién creada
    function mostrarCitaCreada(cita) {
        const citaCreadaDiv = document.getElementById("citaCreada");
        const citaPaciente = document.getElementById("citaPaciente");
        const citaOdontologo = document.getElementById("citaOdontologo");
        const citaFecha = document.getElementById("citaFecha");

        // Asumiendo que `cita` contiene los datos del paciente y odontólogo en el formato correcto
        fetch(`${apiURL}/paciente/${cita.pacienteId}`)
            .then(response => response.json())
            .then(paciente => {
                citaPaciente.textContent = `${paciente.nombre} ${paciente.apellido}`;
            })
            .catch(error => console.error("Error al obtener datos del paciente:", error));

        fetch(`${apiURL}/odontologo/${cita.odontologoId}`)
            .then(response => response.json())
            .then(odontologo => {
                citaOdontologo.textContent = `${odontologo.nombre} ${odontologo.apellido}`;
            })
            .catch(error => console.error("Error al obtener datos del odontólogo:", error));

        citaFecha.textContent = cita.fecha;

        citaCreadaDiv.style.display = "block";
    }
});
