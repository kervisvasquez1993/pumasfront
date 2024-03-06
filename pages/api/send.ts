import { NextApiRequest, NextApiResponse } from "next";
import EmailTemplate from "../../components/email-template";
import { Resend } from "resend";
import ContactForm from "../../components/contact";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //console.log(req.body.type)
  if (req.body.type === "Contacto") {
    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["kervisvasquez24@gmail.com"],
        subject: req.body.type,
        react: ContactForm({
          nombre: req.body.nombre,
          email: req.body.correo,
          fecha: req.body.fecha,
          hora: req.body.hora,
          cantidadAdultos: req.body.cantidadAdultos,
          requiereGuia: req.body.requiereGuia,
          cantidadNinos: req.body.cantidadNinos,
          descripcion: req.body.descripcion,
        }),
      });
      res.status(200).json({ mensaje: "Mensaje Enviado", data });
    } catch (error) {
      // En caso de error, responde con un estado 400 y los detalles del error
      res.status(400).json({ mensaje: "Error al enviar el correo", error });
      console.error("Error al enviar el correo:", error);
    }
  }

  if (req.body.type === "Donación") {
    try {
    

      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["kervisvasquez24@gmail.com"],
        subject: req.body.type,
        react: EmailTemplate({
          nombre: req.body.nombre,
          correo: req.body.correo,
          monto: req.body.monto,
          donacion :  req.body.donacion,
          typeSponsorship :  req.body.typeSponsorship,
          nombreEspecie :  req.body.nombreEspecie,
        }),
      });
      res.status(200).json({ mensaje: "Mensaje Enviado", data });
    } catch (error) {
      console.log(error, "Error sending");
      // En caso de error, responde con un estado 400 y los detalles del error
      res.status(403).json({ mensaje: "Error al enviar el correo", error });
      console.error("Error al enviar el correo:", error);
    }
  }
};
