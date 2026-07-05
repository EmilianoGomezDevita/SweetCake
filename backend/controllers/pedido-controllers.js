const { json } = require("express");
const {mssql, conectarDB} = require("../config/db");
const {enviarEmail} = require("../utils/mailer")

const crearPedido = async (req, res) => {
    try{
        //
        const {cliente, email, servicio, descripcion} = req.body
        //OBTNEMOS EL POOL DE CONEXION
        const pool = await conectarDB()
        //CONEXION Y GUARDADO DE LOS DATOEN EN LA DB
        await pool.request()
            .input("cliente", mssql.VarChar, cliente)
            .input("Email", mssql.VarChar, email)
            .input("servicio", mssql.VarChar, servicio)
            .input("descripcion", mssql.VarChar, descripcion)
            .query("INSERT into Pedidos(cliente, email, servicio, descripcion) VALUES (@cliente, @email, @servicio, @descripcion)")
        //ENVIO DE EMAILS
        await enviarEmail(process.env.EMAIL_USER, "Nuevo pedido recibido", `El cliente <b>${cliente}</b> solicita el servicio de <b>${servicio}</b>.<br>Descripción: ${descripcion}`)
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