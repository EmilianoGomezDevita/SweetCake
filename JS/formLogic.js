console.log("JS conectado");
document.addEventListener("DOMContentLoaded", function () {
  ///LLAMANDO A LOS ATRIBUTOS DEL FORM
  const alertaEnviar = document.getElementById("toastForm");
  const formulario = document.getElementById("formPedido");
  //Mejoras en el formulario de servicios.html

    if(formulario){
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            const pedido =  {
                Nombre: document.getElementById("nombre").value,
                Email: document.getElementById("email").value,
                Servicio: document.getElementById("servicio").value,
                Descripcion: document.getElementById("descripcion").value

            }
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
    }
  
});
