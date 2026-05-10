const { json } = require("express");
const {mssql} = require("../config/db")

const crearPedido = async (req, res) => {
    try{
        console.log("Datos recibidos en el ontrolador: ", req.body)
        // Aquí es donde luego haremos el pool.request().query(...)
        // Por ahora, solo confirmamos recepción
        res.status(201),json({
            mensaje: "Pedido recibido correctamente",
            data: req.body
        })
    }
    catch(error){
        res.status(500).json({mensaje: "Error al procesar el pedido: ", error})

    }
};

module.exports = {crearPedido}