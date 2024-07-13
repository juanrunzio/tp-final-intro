function agregarAtleta(event) {
  event.preventDefault();
  const formData = {
    nombre: document.getElementById("nombre").value,
    pais: document.getElementById("pais").value,
    fecha_nacimiento: document.getElementById("fecha_nacimiento").value,
    genero: document.getElementById("genero").value,
    evento_id: document.getElementById("evento").value,
    imagen: document.getElementById("imagen").value,
    deporte: document.getElementById("deporte").value,
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
    deporte_id: document.getElementById("editar-deporte").value,
    evento_id: document.getElementById("editar-evento").value,
    imagen: document.getElementById("editar-imagen").value,
  };

  console.log(formData);

  fetch(`/atletas/${formData.id}`, {
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
    deporte_id: document.getElementById("editar-deporte").value,
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

function abrirModalEditarAtleta(id) {
  fetch(`/atletas/${id}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("editar-id-atleta").value = data.id;
      document.getElementById("editar-nombre").value = data.nombre;
      document.getElementById("editar-pais").value = data.pais;
      document.getElementById("editar-fecha_nacimiento").value =
        data.fecha_nacimiento;
      document.getElementById("editar-genero").value = data.genero;
      document.getElementById("editar-imagen").value = data.imagen;
      document.getElementById("editar-evento").value = data.evento_id;
      document.getElementById("editar-deporte").value = data.deporte_id;
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
      document.getElementById("editar-id-evento").value = data.id;
      document.getElementById("editar-nombre").value = data.nombre;
      document.getElementById("editar-fecha").value = data.fecha;
      document.getElementById("editar-lugar").value = data.lugar;
      document.getElementById("editar-deporte").value = data.deporte_id;
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

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === "/paris-2024") {
    var nav = document.querySelector("nav");
    nav.style.backgroundImage = "url('static/img/d02.svg')";
  }
});

if (window.location.pathname === "/") {
  const fechaCuentaRegresiva = new Date("July 26, 2024 00:00:00").getTime();

  let x = setInterval(function () {
    let actual = new Date().getTime();
    let distancia = fechaCuentaRegresiva - actual;

    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let horas = Math.floor(
      (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias
      .toString()
      .padStart(2, "0");
    document.getElementById("horas").textContent = horas
      .toString()
      .padStart(2, "0");
    document.getElementById("minutos").textContent = minutos
      .toString()
      .padStart(2, "0");
    document.getElementById("segundos").textContent = segundos
      .toString()
      .padStart(2, "0");

    if (distancia < 0) {
      clearInterval(x);
      document.querySelector(".countdown-container").innerHTML =
        "<h2 style=font-family:Paris2024 >Llego el dia</h2>";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === "/atletas") {
    const deporteSelect = document.getElementById("deporte");
    const eventoSelect = document.getElementById("evento");

    deporteSelect.addEventListener("change", function () {
      const deporteId = this.value;
      if (deporteId) {
        fetch(`/eventos_por_deporte/${deporteId}`)
          .then((response) => response.json())
          .then((data) => {
            eventoSelect.innerHTML =
              '<option value="">Selecciona evento</option>';
            data.forEach((evento) => {
              const option = document.createElement("option");
              option.value = evento.id;
              option.textContent = evento.nombre;
              eventoSelect.appendChild(option);
            });
            eventoSelect.disabled = false;
          })
          .catch((error) => console.error("Error:", error));
      } else {
        eventoSelect.innerHTML = '<option value="">Selecciona evento</option>';
        eventoSelect.disabled = true;
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === "/atletas") {
    const deporteSelect = document.getElementById("editar-deporte");
    const eventoSelect = document.getElementById("editar-evento");

    deporteSelect.addEventListener("change", function () {
      const deporteId = this.value;
      if (deporteId) {
        fetch(`/eventos_por_deporte/${deporteId}`)
          .then((response) => response.json())
          .then((data) => {
            eventoSelect.innerHTML =
              '<option value="">Selecciona evento</option>';
            data.forEach((evento) => {
              const option = document.createElement("option");
              option.value = evento.id;
              option.textContent = evento.nombre;
              eventoSelect.appendChild(option);
            });
            eventoSelect.disabled = false;
          })
          .catch((error) => console.error("Error:", error));
      } else {
        eventoSelect.innerHTML = '<option value="">Selecciona evento</option>';
        eventoSelect.disabled = true;
      }
    });
  }
});
