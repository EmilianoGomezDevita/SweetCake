const express = require("express");
const cors = require("cors")

const app = express();

/*
✔ require() → importar
✔ express() → crear app
✔ app.get() → rutas GET
✔ res.send() → responder
✔ app.listen() → abrir servido
*/

///ESTRUCTURA DEL .get("ruta", function(request o response))/ este sirve para "PEDIR"
// app.get("/", function(req, res){
//     res.send("Bienvenido al servidor")
// });

app.listen(3000, function(){
    console.log("Servidor corriendo")
});

app.use(express.json())
app.use(cors())
///NOTAS: no es ecesario que la ruta("/") tenga el mismo nombre que el HTML
///el req.body abarca todo como u obj, si quiero especificar en algo uso req.body.datoEspecifico(ej:nombre ,numero, etc)
app.post("/pedidos", function(req, res){
    console.log(req.body)
    res.send("Data received")
});