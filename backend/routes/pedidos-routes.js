const express = require("express")
const router = express.Router()
const {crearPedido} = require("../controllers/pedido-controllers")

///NOTAS: no es ecesario que la ruta("/") tenga el mismo nombre que el HTML
///el req.body abarca todo como u obj, si quiero especificar en algo uso req.body.datoEspecifico(ej:nombre ,numero, etc)
router.post("/pedidos", crearPedido)

module.exports = router