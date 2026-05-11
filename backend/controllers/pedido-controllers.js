const { json } = require("express");
const {mssql, conectarDB} = require("../config/db");

const crearPedido = async (req, res) => {
    try{
        //
       const {cliente, producto, cantidad} = req.body
       //OBTNEMOS EL POOL DE CONEXION
       const pool = await conectarDB()

       await pool.request()
            .input("cliente", mssql.VarChar, cliente)
            .input("producto", mssql.VarChar, producto)
            .input("cantidad", mssql.Int, cantidad)
            .query("INSERT into Pedidos(cliente, producto, cantidad) VALUES (@cliente, @producto, @cantidad)")
        // Por ahora, solo confirmamos recepción
        res.status(201).json({
            mensaje: "Pedido guardado exitosamente en SweetCakeDB",
            data: req.body
        })
    }
    catch(error){
        console.error("Error en el INSERT:", error)

        res.status(500).json({mensaje: "Error al guarada en DB: ", error: error.message})

    }
};

module.exports = {crearPedido}