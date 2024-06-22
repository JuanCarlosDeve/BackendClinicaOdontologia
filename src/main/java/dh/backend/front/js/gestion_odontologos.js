// /js/gestion_odontologos.js
const apiURL = "http://localhost:8080";

document.getElementById("agregarForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const matricula = document.getElementById("matricula").value;

    fetch(`${apiURL}/odontologo`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, apellido, nroMatricula: matricula }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        alert("Odontólogo agregado con éxito");
        document.getElementById("agregarForm").reset();
        listarOdontologos();
        showSection('listOdontologos');
    })
    .catch((error) => {
        console.error("Error agregando odontólogo:", error);
    });
});

function listarOdontologos() {
    fetch(`${apiURL}/odontologo`)
        .then((response) => response.json())
        .then((data) => {
            const tableBody = document.getElementById("odontologoTableBody");
            tableBody.innerHTML = "";
            data.forEach((odontologo) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${odontologo.id}</td>
                    <td>${odontologo.nombre}</td>
                    <td>${odontologo.apellido}</td>
                    <td>${odontologo.nroMatricula}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="mostrarEditarOdontologo(${odontologo.id})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="eliminarOdontologo(${odontologo.id})">Eliminar</button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch((error) => {
            console.error("Error obteniendo odontólogos:", error);
        });
}

function mostrarEditarOdontologo(id) {
    fetch(`${apiURL}/odontologo/${id}`)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("editId").value = data.id;
            document.getElementById("editNombre").value = data.nombre;
            document.getElementById("editApellido").value = data.apellido;
            document.getElementById("editMatricula").value = data.nroMatricula;
            showSection('editOdontologo');
        })
        .catch((error) => {
            console.error("Error obteniendo odontólogo:", error);
        });
}

document.getElementById("editarForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const id = document.getElementById("editId").value;
    const nombre = document.getElementById("editNombre").value;
    const apellido = document.getElementById("editApellido").value;
    const matricula = document.getElementById("editMatricula").value;

    fetch(`${apiURL}/odontologo`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, nombre, apellido, nroMatricula: matricula }),
    })
    .then((response) => {
        if (response.ok) {
            alert("Odontólogo modificado con éxito");
            listarOdontologos();
            showSection('listOdontologos');
        } else {
            alert("Error modificando odontólogo");
        }
    })
    .catch((error) => {
        console.error("Error modificando odontólogo:", error);
    });
});

function eliminarOdontologo(id) {
    fetch(`${apiURL}/odontologo/${id}`, {
        method: "DELETE",
    })
    .then((response) => {
        if (response.ok) {
            alert("Odontólogo eliminado con éxito");
            listarOdontologos();
        } else {
            alert("Error eliminando odontólogo");
        }
    })
    .catch((error) => {
        console.error("Error eliminando odontólogo:", error);
    });
}

function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";

    if (sectionId === "listOdontologos") {
        listarOdontologos();
    }
}

// Inicializar la lista de odontólogos al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    listarOdontologos();
});
