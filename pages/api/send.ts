import { NextApiRequest, NextApiResponse } from 'next';
import EmailTemplate from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend("re_XrHmKWqJ_Q9aNJyoQeh3a13pFTQ7vrNwc");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { nombre, correo, monto, donacion, type } = req.body;
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['kervisvasquez24@gmail.com'],
      subject: type,
      react: EmailTemplate({ nombre, correo, monto, donacion }),
    });
    res.status(200).json({ mensaje: "Email enviado", data });
  } catch (error) {
    // En caso de error, responde con un estado 400 y los detalles del error
    res.status(400).json({ mensaje: "Error al enviar el correo", error });
    console.error("Error al enviar el correo:", error);
  }
};
