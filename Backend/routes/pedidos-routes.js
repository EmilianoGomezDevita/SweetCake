const express = require("express")
const router = express.Router()

///NOTAS: no es ecesario que la ruta("/") tenga el mismo nombre que el HTML
///el req.body abarca todo como u obj, si quiero especificar en algo uso req.body.datoEspecifico(ej:nombre ,numero, etc)
router.post("/pedidos", function(req, res){
    console.log("pedido recibido: ", req.body)
    res.send("Data received")
});

module.exports = router