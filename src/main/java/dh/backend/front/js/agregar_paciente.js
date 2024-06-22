document.addEventListener('DOMContentLoaded', function () {
	const formularioPaciente = document.getElementById('formularioPaciente');

	formularioPaciente.addEventListener('submit', function (event) {
			event.preventDefault(); 


			const apellido = document.getElementById('apellido').value;
			const nombre = document.getElementById('nombre').value;
			const dni = document.getElementById('dni').value;
			const fechaIngreso = document.getElementById('fechaIngreso').value;
			const calle = document.getElementById('calle').value;
			const numero = document.getElementById('numero').value;
			const localidad = document.getElementById('localidad').value;
			const provincia = document.getElementById('provincia').value;

			
			const datosPaciente = {
					apellido: apellido,
					nombre: nombre,
					dni: dni,
					fechaIngreso: fechaIngreso,
					domicilio: {
							calle: calle,
							numero2: parseInt(numero), // Convertir a número entero
							localidad: localidad,
							provincia: provincia
					}
			};

	
			fetch('http://localhost:8080/paciente', {
					method: 'POST',
					headers: {
							'Content-Type': 'application/json',
					},
					body: JSON.stringify(datosPaciente),
			})
			.then(response => {
					if (!response.ok) {
							throw new Error('Error al agregar el paciente');
					}
					return response.json();
			})
			.then(data => {
					console.log('Paciente agregado correctamente:', data);
					
					alert('Paciente agregado correctamente');
					formularioPaciente.reset(); 
			})
			.catch(error => {
					console.error('Error al agregar el paciente:', error);
					
					alert('Error al agregar el paciente');
			});
	});
});
