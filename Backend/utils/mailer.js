const nodemailer = require("nodemailer")


const enviarEmail = async (emailDestino, asunto, mensaje) => {
    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASSWORD_PASS
            }
        })
        
        const mailopts = {
            from: "gomezdevitaemiliano@gmail.com",
            to: emailDestino,
            subject: asunto,
            text: mensaje
        }

        await transporter.sendMail(mailopts) 
    }
    catch(error){
        console.error("ERROR al enviar email: ", error)
    }

}

module.exports = {enviarEmail}