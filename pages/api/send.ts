import { NextApiRequest, NextApiResponse } from 'next';
import EmailTemplate from '../../components/email-template';
import { Resend } from 'resend';
import ContactForm from '../../components/contact';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body.type)
  if (req.body.type === "Contacto") {
    try {

      console.log(req.body)
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['kervisvasquez24@gmail.com'],
        subject: req.body.type,
        react: ContactForm({
          nombre: req.body.nombre,
          email: req.body.correo,
          fecha: req.body.fecha,
          hora: req.body.hora,
          cantidadAdultos: req.body.cantidadAdultos,
          requiereGuia : req.body.requiereGuia,
          cantidadNinos: req.body.cantidadNinos,
          descripcion: req.body.descripcion
        })
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

    const { nombre, correo, monto, donacion, type } = req.body;
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['kervisvasquez24@gmail.com'],
      subject: type,
      react: EmailTemplate({ nombre, correo, monto, donacion }),
    });
    res.status(200).json({ mensaje: "Mensaje Enviado", data });
  } catch (error) {
    // En caso de error, responde con un estado 400 y los detalles del error
    res.status(400).json({ mensaje: "Error al enviar el correo", error });
    console.error("Error al enviar el correo:", error);
  }
}

};
