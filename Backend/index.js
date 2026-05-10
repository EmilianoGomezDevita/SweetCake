const express = require("express");
const cors = require("cors")
const {conectarDB} = require("./config/db")
const pedidosRuta = require("./routes/pedidos-routes")

const app = express();

//MIDDLEWARES
app.use(express.json())
app.use(cors())

//CONEXION INICIAL
conectarDB()

app.use("/api", pedidosRuta)

const PORT = 3000
app.listen(PORT, function(){
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});



