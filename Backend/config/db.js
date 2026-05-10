const mssql = require("mssql")

const config = {
    user: "egomedev",

    password: "emi1234",

    server: "localhost",

    database: "SweetCakeDB",

    port: 1433,

    options: {
        //instanceName: "SQLEXPRESS",
        encrypt: false,
        trustServerCertificate: true,
        //trustedConnection: true,
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