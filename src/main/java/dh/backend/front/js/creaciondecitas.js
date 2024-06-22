const apiURL = "http://localhost:8080";

document.addEventListener("DOMContentLoaded", function() {
    // Manejar el formulario de agregar paciente
    const agregarPacienteForm = document.getElementById("agregarPacienteForm");
    agregarPacienteForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const domicilio = document.getElementById("domicilio").value;
        const dni = document.getElementById("dni").value;
        const fechaAlta = document.getElementById("fechaAlta").value;

        // Llamada al endpoint de agregar paciente
        fetch(`${apiURL}/paciente`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre, apellido, domicilio, dni, fechaAlta }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Paciente agregado con éxito");
            mostrarSeleccionOdontologoTurno(); // Mostrar el siguiente paso
        })
        .catch(error => {
            console.error("Error agregando paciente:", error);
        });
    });

    // Cargar odontólogos disponibles al cargar la página
    cargarOdontologos();

    // Manejar el formulario de seleccionar odontólogo y turno
    const seleccionOdontologoTurnoForm = document.getElementById("seleccionOdontologoTurnoForm");
    seleccionOdontologoTurnoForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const odontologoId = document.getElementById("odontologoSelect").value;
        const fechaTurno = document.getElementById("fechaTurno").value;

        // Llamada al endpoint de crear turno
        fetch(`${apiURL}/turno`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ pacienteId: pacienteId, odontologoId, fechaTurno }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Turno creado con éxito");
            // Aquí podrías redirigir o mostrar algún mensaje de confirmación
        })
        .catch(error => {
            console.error("Error creando turno:", error);
        });
    });
});

// Función para cargar odontólogos disponibles
function cargarOdontologos() {
    fetch(`${apiURL}/odontologo`)
    .then(response => response.json())
    .then(data => {
        const odontologoSelect = document.getElementById("odontologoSelect");

        data.forEach(odontologo => {
            const option = document.createElement("option");
            option.value = odontologo.id;
            option.textContent = `${odontologo.apellido}, ${odontologo.nombre}`;
            odontologoSelect.appendChild(option);
        });

        // Mostrar el formulario una vez cargados los odontólogos
        document.getElementById("seleccionOdontologoTurno").style.display = "block";
    })
    .catch(error => {
        console.error("Error obteniendo odontólogos:", error);
    });
}

// Función para mostrar el formulario de seleccionar odontólogo y turno
function mostrarSeleccionOdontologoTurno() {
    document.getElementById("crearPacienteForm").style.display = "none";
    document.getElementById("seleccionOdontologoTurno").style.display = "block";
}
