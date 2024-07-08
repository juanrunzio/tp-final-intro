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

document.addEventListener("DOMContentLoaded", function () {
  window.editarAtleta = function (id) {
    fetch(`/atletas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("editar-id").value = data.id;
        document.getElementById("editar-nombre").value = data.nombre;
        document.getElementById("editar-pais").value = data.pais;
        document.getElementById("editar-fecha_nacimiento").value =
          data.fecha_nacimiento;
        document.getElementById("editar-genero").value = data.genero;
        document.getElementById("modal-editar-atleta").style.display = "block";
      });
  };

  window.cerrarModal = function () {
    document.getElementById("modal-editar-atleta").style.display = "none";
  };

  document
    .getElementById("editar-atleta-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const id = document.getElementById("editar-id").value;
      const nombre = document.getElementById("editar-nombre").value;
      const pais = document.getElementById("editar-pais").value;
      const fecha_nacimiento = document.getElementById(
        "editar-fecha_nacimiento"
      ).value;
      const genero = document.getElementById("editar-genero").value;

      fetch(`/atletas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, pais, fecha_nacimiento, genero }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          window.location.reload();
        });
    });
});
