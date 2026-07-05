const { mssql, conectarDB } = require("./_lib/db");
const { enviarEmail } = require("./_lib/mailer");

module.exports = async (req, res) => {
  // CORS (por si en algún momento el front no está en el mismo dominio)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ mensaje: "Método no permitido" });
  }

  try {
    const { cliente, email, servicio, descripcion } = req.body;

    const pool = await conectarDB();
    await pool.request()
      .input("cliente", mssql.VarChar, cliente)
      .input("Email", mssql.VarChar, email)
      .input("servicio", mssql.VarChar, servicio)
      .input("descripcion", mssql.VarChar, descripcion)
      .query("INSERT into Pedidos(cliente, email, servicio, descripcion) VALUES (@cliente, @Email, @servicio, @descripcion)");

    await enviarEmail(
      process.env.EMAIL_USER,
      "Nuevo pedido recibido",
      `El cliente <b>${cliente}</b> solicita el servicio de <b>${servicio}</b>.<br>Descripción: ${descripcion}`
    );
    await enviarEmail(email, "Pedido recibido", "¡Gracias por tu compra! Tu pedido está en proceso.");

    res.status(201).json({
      mensaje: "Pedido guardado exitosamente en SweetCakeDB",
      data: req.body,
    });
  } catch (error) {
    console.error("Error en el INSERT:", error);
    res.status(500).json({ mensaje: "Error al guardar en DB: ", error: error.message });
  }
};