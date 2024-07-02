// Función para agregar un nuevo atleta
function agregarAtleta(event) {
  event.preventDefault();
  const formData = {
    nombre: document.getElementById("nombre").value,
    pais: document.getElementById("pais").value,
    fecha_nacimiento: document.getElementById("fecha_nacimiento").value,
    genero: document.getElementById("genero").value,
  };

  fetch("/atletas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Función para editar un atleta
function editarAtleta(id) {
  // Aquí implementarías la lógica para editar un atleta
  console.log("Editar atleta con id:", id);
}

// Función para eliminar un atleta
function eliminarAtleta(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este atleta?")) {
    fetch(`/atletas/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

// Agregar evento al formulario
document
  .getElementById("atleta-form")
  .addEventListener("submit", agregarAtleta);
