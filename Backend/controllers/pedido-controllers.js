const { json } = require("express");
const {mssql, conectarDB} = require("../config/db");
const {enviarEmail} = require("../utils/mailer")

const crearPedido = async (req, res) => {
    try{
        //
        const {cliente, email, producto, cantidad} = req.body
        //OBTNEMOS EL POOL DE CONEXION
        const pool = await conectarDB()
        //CONEXION Y GUARDADO DE LOS DATOEN EN LA DB
        await pool.request()
            .input("cliente", mssql.VarChar, cliente)
            .input("Email", mssql.VarChar, email)
            .input("producto", mssql.VarChar, producto)
            .input("cantidad", mssql.Int, cantidad)
            .query("INSERT into Pedidos(cliente, email, producto, cantidad) VALUES (@cliente, @email, @producto, @cantidad)")
        //ENVIO DE EMAILS
        await enviarEmail("egomezdevita@gmail.com", "Pedido", `Nuevo pedido de: ${cliente}, ${producto}, ${cantidad}`)
        await enviarEmail(email, "Pedido recibido", "¡Gracias por tu compra! Tu pedido está en proceso.")
        // RESPUESTA FINAL AL CLIENTE
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