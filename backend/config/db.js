const mssql = require("mssql")

const config = {
    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    server: process.env.DB_SERVER,

    database: process.env.DB_DATABASE,

    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};


async function conectarDB() {
    try{
        const pool = await mssql.connect(config)
        console.log("conectado a SQL server")
        return pool
    }
    catch(error){
        console.log("Error al intentar conectar: ", error);
        process.exit(1)
    }
}

module.exports = {mssql, conectarDB}