const form = document.getElementById("agregarPacienteForm");
const apiURL = "http://localhost:8080/paciente";

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const fechaIngreso = document.getElementById("fechaIngreso").value;
    const calle = document.getElementById("calle").value;
    const numero = document.getElementById("numero").value;
    const localidad = document.getElementById("localidad").value;
    const provincia = document.getElementById("provincia").value;

    const domicilio = {
        calle: calle,
        numero: parseInt(numero), // Convierte a número entero
        localidad: localidad,
        provincia: provincia
    };

    const paciente = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        fechaIngreso: fechaIngreso,
        domicilio: domicilio
    };

    fetch(apiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(paciente)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Paciente agregado con éxito");
        form.reset(); // Resetear el formulario
    })
    .catch(error => {
        console.error("Error agregando paciente:", error);
    });
});
