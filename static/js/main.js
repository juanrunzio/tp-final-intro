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

function editarAtleta(id) {
  const formData = {
    nombre: document.getElementById("nombre").value,
    pais: document.getElementById("pais").value,
    fecha_nacimiento: document.getElementById("fecha_nacimiento").value,
    genero: document.getElementById("genero").value,
  };

  fetch(`/atletas/${id}`, {
    method: "PUT",
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

function agregarEvento(event) {
  event.preventDefault();
  const formData = {
    nombre: document.getElementById("nombre").value,
    deporte: document.getElementById("deporte").value,
    fecha: document.getElementById("fecha").value,
    lugar: document.getElementById("lugar").value,
  };

  fetch("/eventos", {
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

function eliminarEvento(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este evento?")) {
    fetch(`/eventos/${id}`, {
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

function editarEvento(id) {
  const formData = {
    nombre: document.getElementById("nombre").value,
    deporte: document.getElementById("deporte").value,
    fecha: document.getElementById("fecha").value,
    lugar: document.getElementById("lugar").value,
  };

  fetch(`/eventos/${id}`, {
    method: "PUT",
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


if (document.getElementById("atleta-form")) {
  document
    .getElementById("atleta-form")
    .addEventListener("submit", agregarAtleta);
}

if (document.getElementById("evento-form")) {
  document
    .getElementById("evento-form")
    .addEventListener("submit", agregarEvento);
}
