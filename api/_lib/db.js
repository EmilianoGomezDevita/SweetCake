const mssql = require("mssql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // recomendado en producción (Azure SQL, etc.)
    trustServerCertificate: true,
  },
};

let poolPromise = null;

async function conectarDB() {
  if (!poolPromise) {
    poolPromise = mssql.connect(config)
      .then((pool) => {
        console.log("Conectado a SQL Server");
        return pool;
      })
      .catch((err) => {
        poolPromise = null; // permite reintentar en la próxima invocación
        console.error("Error al conectar:", err);
        throw err;
      });
  }
  return poolPromise;
}

module.exports = { mssql, conectarDB };