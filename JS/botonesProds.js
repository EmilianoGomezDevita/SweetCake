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
})