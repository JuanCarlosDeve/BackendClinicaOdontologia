// /js/listar_pacientes.js
const apiURL = "http://localhost:8080";

document.addEventListener("DOMContentLoaded", function () {
    fetch(`${apiURL}/paciente`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("pacientesTableBody");
            data.forEach(paciente => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${paciente.nombre}</td>
                    <td>${paciente.apellido}</td>
                    <td>${paciente.domicilio}</td>
                    <td>${paciente.dni}</td>
                    <td>${paciente.fechaAlta}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error al listar pacientes:", error));
});
