console.log("JS conectado")
document.addEventListener("DOMContentLoaded", function () {
    //carrito sin productos
    const toastSinProd = document.getElementById("toastSinProd");

    //suamr producto al carrito
    const botonesCompra = document.querySelectorAll(".btn-comprar");
    const toast = document.getElementById("toast");
    const contadorProd = document.getElementById("carritoContador");
    //restar producto del carrito
    const restarProd = document.querySelectorAll(".btn-quitar");
    const toastRestar = document.getElementById("toastRestar");

    ///LLAMANDO A LOS ATRIBUTOS DEL FORM
    const alertaEnviar = document.getElementById("toastForm");
    const nombreForm = document.getElementById("nombre").value
    const emailForm = document.getElementById("email").value
    const servicioForm = document.getElementById("servicio").value
    const descripcionForm = document.getElementById("descripcion").value
    ///creando el obj con los atrbutos del form
    const pedido = {
        Nombre: nombreForm,
        Email: emailForm,
        Servicio: servicioForm,
        Descrpcion: descripcionForm
    }

    console.log(pedido);

    let contador = 0;

    botonesCompra.forEach(boton => {
        boton.addEventListener("click", () => {
            // Reiniciamos la animación si ya estaba corriendo
            toast.classList.remove("show");
            void toast.offsetWidth; // Truco para resetear animaciones CSS
            toast.classList.add("show");
            
            // La animación de CSS se encarga de ocultarlo, 
            // pero lo limpiamos en JS después de 3s
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
            
            contador = contador + 1;
            contadorProd.textContent = "Productos en carrito 🛒: " + contador;

        });
    });

    restarProd.forEach(botonRestar => {
        console.log("evento conectado");
        botonRestar.addEventListener("click", () => {

            console.log("click restar");

            if(contador === 0){
                toastSinProd.classList.remove("show");
                void toastSinProd.offsetWidth;
                toastSinProd.classList.add("show")

                setTimeout(() => {
                    toastSinProd.classList.remove("show");
                }, 3000);
                return;
            }

            toastRestar.classList.remove("show");
            void toastRestar.offsetWidth; // Truco para resetear animaciones CSS
            toastRestar.classList.add("show");

            setTimeout(() => {
                toastRestar.classList.remove("show");
            }, 3000);


            contador--;
            contadorProd.textContent = "Productos en carrito 🛒: " + contador;
        });

    })

    //Mejoras en el formulario de servicios.html
    const formulario = document.getElementById("formPedido");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        fetch("http://localhost:3000/pedidos", {
            method: "POST",
            body: JSON.stringify(pedido),
            headers:{
                "Content-Type": "application/json"
            } 
        })
        .then(response => {
            if (response.ok) {
                ///alert("¡Gracias por su pedido! Su formulario ha sido enviado con éxito.");
                alertaEnviar.classList.remove("show");
                void alertaEnviar.offsetWidth; // Truco para resetear animaciones CSS
                alertaEnviar.classList.add("show");

            } else {
                // El servidor respondió con un error (e.g., 404, 500)
                alert("Hubo un problema al enviar su pedido. Por favor, inténtelo de nuevo más tarde.");
            }
        })
        .catch(error => {
            // Error de red o algo impidió que la petición se completara
            console.error("Error en la petición fetch:", error);
            alert("Hubo un error de conexión al enviar su pedido. Por favor, revise su conexión a internet.");
        });
    });

});
