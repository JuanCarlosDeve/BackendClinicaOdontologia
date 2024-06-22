const apiURL = "http://localhost:8080";

document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("pacientesTableBody");


    function cargarPacientes() {
        fetch(`${apiURL}/paciente`)
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = ""; // Limpiar contenido anterior
                data.forEach(paciente => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${paciente.nombre}</td>
                        <td>${paciente.apellido}</td>
                        <td>${paciente.domicilio.calle} ${paciente.domicilio.numero2}, ${paciente.domicilio.localidad}, ${paciente.domicilio.provincia}</td>
                        <td>${paciente.dni}</td>
                        <td>${paciente.fechaIngreso}</td>
                        <td>
                            <button type="button" class="btn btn-primary btn-sm btn-modificar" data-paciente-id="${paciente.id}">Modificar</button>
                            <button type="button" class="btn btn-danger btn-sm btn-borrar" data-paciente-id="${paciente.id}">Borrar</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });

                // Asignar eventos a los botones de modificar y borrar
                const botonesModificar = document.querySelectorAll(".btn-modificar");
                botonesModificar.forEach(boton => {
                    boton.addEventListener("click", mostrarFormularioModificar);
                });

                const botonesBorrar = document.querySelectorAll(".btn-borrar");
                botonesBorrar.forEach(boton => {
                    boton.addEventListener("click", borrarPaciente);
                });
            })
            .catch(error => console.error("Error al listar pacientes:", error));
    }


    cargarPacientes();


    function mostrarFormularioModificar(event) {
        const pacienteId = event.target.getAttribute("data-paciente-id");


        fetch(`${apiURL}/paciente/${pacienteId}`)
            .then(response => response.json())
            .then(data => {

                document.getElementById("pacienteId").value = pacienteId;
                document.getElementById("apellidoModificar").value = data.apellido;
                document.getElementById("nombreModificar").value = data.nombre;
                document.getElementById("dniModificar").value = data.dni;
                document.getElementById("fechaIngresoModificar").value = data.fechaIngreso;
                document.getElementById("calleModificar").value = data.domicilio.calle;
                document.getElementById("numeroModificar").value = data.domicilio.numero2;
                document.getElementById("localidadModificar").value = data.domicilio.localidad;
                document.getElementById("provinciaModificar").value = data.domicilio.provincia;


                const modal = new bootstrap.Modal(document.getElementById('modalModificarPaciente'));
                modal.show();
            })
            .catch(error => console.error("Error al obtener datos del paciente:", error));
    }


    function borrarPaciente(event) {
        const pacienteId = event.target.getAttribute("data-paciente-id");

        if (confirm("¿Está seguro que desea borrar este paciente?")) {
            fetch(`${apiURL}/paciente/${pacienteId}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al borrar el paciente');
                    }
                    // Actualizar la lista de pacientes después de borrar
                    cargarPacientes();
                })
                .catch(error => console.error("Error al borrar paciente:", error));
        }
    }


    const formularioModificarPaciente = document.getElementById("formularioModificarPaciente");
    formularioModificarPaciente.addEventListener("submit", function (event) {
        event.preventDefault();

        const pacienteId = document.getElementById("pacienteId").value;
        const apellido = document.getElementById("apellidoModificar").value;
        const nombre = document.getElementById("nombreModificar").value;
        const dni = document.getElementById("dniModificar").value;
        const fechaIngreso = document.getElementById("fechaIngresoModificar").value;
        const calle = document.getElementById("calleModificar").value;
        const numero = document.getElementById("numeroModificar").value;
        const localidad = document.getElementById("localidadModificar").value;
        const provincia = document.getElementById("provinciaModificar").value;

        const datosPaciente = {
            apellido: apellido,
            nombre: nombre,
            dni: dni,
            fechaIngreso: fechaIngreso,
            domicilio: {
                calle: calle,
                numero2: parseInt(numero),
                localidad: localidad,
                provincia: provincia
            }
        };

        fetch(`${apiURL}/paciente/${pacienteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosPaciente),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al modificar el paciente');
                }

                cargarPacientes();

                const modal = new bootstrap.Modal(document.getElementById('modalModificarPaciente'));
                modal.hide();
            })
            .catch(error => console.error("Error al modificar paciente:", error));
    });
});
