const tableBody = document.querySelector("#pacientesTable tbody");
const apiURL = "http://localhost:8080";
const editModal = new bootstrap.Modal(document.getElementById("editModal"));
const editForm = document.getElementById("editForm");

function fetchPaciente() {
  fetch(`${apiURL}/paciente`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      tableBody.innerHTML = "";

      data.forEach((paciente, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${paciente.nombre}</td>
                    <td>${paciente.apellido}</td>
                    <td>${paciente.dni}</td>
                    <td>${paciente.fechaIngreso}</td>
                    <td>
                        <button
                            class="btn btn-primary btn-sm"
                            onclick="editPaciente(${paciente.id},
                                '${paciente.nombre}',
                                '${paciente.apellido}',
                                '${paciente.dni}',
                                '${paciente.fechaIngreso}',
                                '${paciente.domicilio.calle}',
                                '${paciente.domicilio.numero}',
                                '${paciente.domicilio.localidad}',
                                '${paciente.domicilio.provincia}'
                            )">
                            Modificar
                        </button>
                        <button
                            class="btn btn-danger btn-sm"
                            onclick="deletePaciente(${paciente.id})">
                            Eliminar
                        </button>
                    </td>
                `;

        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function editPaciente(
  id,
  nombre,
  apellido,
  dni,
  fechaIngreso,
  calle,
  numero,
  localidad,
  provincia
) {
  document.getElementById("editId").value = id;
  document.getElementById("editNombre").value = nombre;
  document.getElementById("editApellido").value = apellido;
  document.getElementById("editDni").value = dni;
  document.getElementById("editFechaIngreso").value = fechaIngreso;
  document.getElementById("editCalle").value = calle;
  document.getElementById("editNumero").value = numero;
  document.getElementById("editLocalidad").value = localidad;
  document.getElementById("editProvincia").value = provincia;

  editModal.show();
}

document.getElementById("saveChangesBtn").addEventListener("click", () => {
  const id = document.getElementById("editId").value;
  const nombre = document.getElementById("editNombre").value;
  const apellido = document.getElementById("editApellido").value;
  const dni = document.getElementById("editDni").value;
  const fechaIngreso = document.getElementById("editFechaIngreso").value;
  const calle = document.getElementById("editCalle").value;
  const numero = document.getElementById("editNumero").value;
  const localidad = document.getElementById("editLocalidad").value;
  const provincia = document.getElementById("editProvincia").value;

  const updatedPaciente = {
    nombre,
    apellido,
    dni,
    fechaIngreso,
    domicilio: {
      calle,
      numero,
      localidad,
      provincia,
    },
  };

  fetch(`${apiURL}/paciente/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPaciente),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      editModal.hide();
      fetchPaciente();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function deletePaciente(id) {
  fetch(`${apiURL}/paciente/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        fetchPaciente();
      } else {
        console.error("Error deleting paciente:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchPaciente();
