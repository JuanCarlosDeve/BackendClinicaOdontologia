const apiURL = "http://localhost:8080";

document.addEventListener("DOMContentLoaded", function() {
    listarOdontologos();
});

function listarOdontologos() {
    fetch(`${apiURL}/odontologo`)
        .then((response) => response.json())
        .then((data) => {
            const odontologosList = document.getElementById("odontologosList");
            odontologosList.innerHTML = "";
            data.forEach((odontologo) => {
                const card = document.createElement("div");
                card.classList.add("col-md-4");
                card.innerHTML = `
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">${odontologo.nombre} ${odontologo.apellido}</h5>
                            <p class="card-text">Matrícula: ${odontologo.nroMatricula}</p>
                        </div>
                    </div>
                `;
                odontologosList.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error obteniendo odontólogos:", error);
        });
}
