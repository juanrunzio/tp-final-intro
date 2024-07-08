function agregarAtleta(event) {
  event.preventDefault();
  const formData = {
    nombre: document.getElementById("nombre").value,
    pais: document.getElementById("pais").value,
    fecha_nacimiento: document.getElementById("fecha_nacimiento").value,
    genero: document.getElementById("genero").value,
    evento_id: document.getElementById("evento").value,
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
      console.log("Error:", error);
    });
}

function editarAtleta(event) {
  event.preventDefault();

  const formData = {
    id: document.getElementById("editar-id-atleta").value,
    nombre: document.getElementById("editar-nombre").value,
    pais: document.getElementById("editar-pais").value,
    fecha_nacimiento: document.getElementById("editar-fecha_nacimiento").value,
    genero: document.getElementById("editar-genero").value,
  };

  console.log(formData);

  fetch(`/atletas/${formData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
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
        console.log("Error:", error);
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
      console.log("Error:", error);
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
        console.log("Error:", error);
      });
  }
}

function editarEvento(event) {
  event.preventDefault();
  const formData = {
    id: document.getElementById("editar-id-evento").value,
    nombre: document.getElementById("editar-nombre").value,
    deporte: document.getElementById("editar-deporte").value,
    fecha: document.getElementById("editar-fecha").value,
    lugar: document.getElementById("editar-lugar").value,
  };

  console.log(formData);

  fetch(`/eventos/${formData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
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
function abrirModalEditarAtleta(id) {
  fetch(`/atletas/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("editar-id-atleta").value = data.id;
      document.getElementById("editar-nombre").value = data.nombre;
      document.getElementById("editar-pais").value = data.pais;
      document.getElementById("editar-fecha_nacimiento").value =
        data.fecha_nacimiento;
      document.getElementById("editar-genero").value = data.genero;
    });

  document.getElementById("modal-editar-atleta").style.display = "block";
}

function cerrarModalEditarAtleta() {
  document.getElementById("modal-editar-atleta").style.display = "none";
}

function abrirModalEditarEvento(id) {
  fetch(`/eventos/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("editar-id-evento").value = data.id;
      document.getElementById("editar-nombre").value = data.nombre;
      document.getElementById("editar-deporte").value = data.deporte;
      document.getElementById("editar-fecha").value = data.fecha;
      document.getElementById("editar-lugar").value = data.lugar;
    });

  document.getElementById("modal-editar-evento").style.display = "block";
}

function cerrarModalEditarEvento() {
  document.getElementById("modal-editar-evento").style.display = "none";
}

if (document.getElementById("modal-editar-atleta")) {
  document
    .getElementById("editar-atleta-form")
    .addEventListener("submit", editarAtleta);
}

if (document.getElementById("modal-editar-evento")) {
  document
    .getElementById("editar-evento-form")
    .addEventListener("submit", editarEvento);
}
