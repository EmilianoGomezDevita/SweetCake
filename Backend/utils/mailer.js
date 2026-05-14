const nodemailer = require("nodemailer")


const enviarEmail = async (emailDestino, asunto, mensaje) => {
    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
        
        const mailopts = {
            from: process.env.EMAIL_USER,
            to: emailDestino,
            subject: asunto,
            text: mensaje,
            html: `<div style="max-width: 600px; margin: auto; border: 1px solid #fce4ec; font-family: sans-serif;">
                <div style="background-color: #fce4ec; padding: 20px; text-align: center;">
                    <h1 style="color: #d81b60; margin: 0;">Sweet Cake</h1>
                </div>
                <div style="padding: 20px; color: #333;">
                    <h2 style="color: #d81b60;">¡Hola!</h2>
                    <p style="font-size: 16px; line-height: 1.5;">
                        Recibimos un nuevo mensaje sobre un pedido de <strong>${asunto}</strong>.
                    </p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #d81b60;">
                        <p><strong>Detalle del mensaje:</strong></p>
                        <p>${mensaje}</p>
                    </div>
                    <p style="margin-top: 20px;">Nos pondremos en contacto a la brevedad.</p>
                </div>
                <div style="background-color: #333; color: #fff; text-align: center; padding: 10px; font-size: 12px;">
                    <p>&copy; 2025 Sweet Cake - Repostería Artesanal</p>
                </div>
            </div>
            `

        }

        await transporter.sendMail(mailopts) 
    }
    catch(error){
        console.error("ERROR al enviar email: ", error)
    }

}

module.exports = {enviarEmail}