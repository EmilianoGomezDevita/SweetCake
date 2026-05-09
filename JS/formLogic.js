console.log("JS conectado");
document.addEventListener("DOMContentLoaded", function () {
  ///LLAMANDO A LOS ATRIBUTOS DEL FORM
  const alertaEnviar = document.getElementById("toastForm");
  const nombreForm = document.getElementById("nombre").value;
  const emailForm = document.getElementById("email").value;
  const servicioForm = document.getElementById("servicio").value;
  const descripcionForm = document.getElementById("descripcion").value;
  ///creando el obj con los atrbutos del form
  const pedido = {
    Nombre: nombreForm,
    Email: emailForm,
    Servicio: servicioForm,
    Descrpcion: descripcionForm,
  };

  console.log(pedido);

  //Mejoras en el formulario de servicios.html
  const formulario = document.getElementById("formPedido");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    fetch("http://localhost:3000/pedidos", {
      method: "POST",
      body: JSON.stringify(pedido),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          ///alert("¡Gracias por su pedido! Su formulario ha sido enviado con éxito.");
          alertaEnviar.classList.remove("show");
          void alertaEnviar.offsetWidth; // Truco para resetear animaciones CSS
          alertaEnviar.classList.add("show");
        } else {
          // El servidor respondió con un error (e.g., 404, 500)
          alert(
            "Hubo un problema al enviar su pedido. Por favor, inténtelo de nuevo más tarde.",
          );
        }
      })
      .catch((error) => {
        // Error de red o algo impidió que la petición se completara
        console.error("Error en la petición fetch:", error);
        alert(
          "Hubo un error de conexión al enviar su pedido. Por favor, revise su conexión a internet.",
        );
      });
  });
});
