const nodemailer = require("nodemailer")


const enviarEmail = async (emailDestino, asunto, mensaje) => {
    try{
        const transporter = ndmailer.createTransport({
            service: "gmail",
            auth: {
                user: "gomezdevitaemiliano",
                pass: "oipfvaryzfutsdle"
            }
        })
        
        const mailopts = {
            from: "gomezdevitaemiliano",
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