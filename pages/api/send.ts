import { NextApiRequest, NextApiResponse } from 'next';
import EmailTemplate from '../../components/email-template';
import { Resend } from 'resend';

// Crea una instancia de Resend con tu API key
const resend = new Resend("re_XrHmKWqJ_Q9aNJyoQeh3a13pFTQ7vrNwc");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Llamado....")
  try {
    // Envía el correo electrónico utilizando la instancia de Resend
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['kervisvasquez24@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    // Responde con un mensaje de éxito y los datos del correo enviado
    res.status(200).json({ mensaje: "Email enviado", data });
  } catch (error) {
    // En caso de error, responde con un estado 400 y los detalles del error
    res.status(400).json({ mensaje: "Error al enviar el correo", error });
    console.error("Error al enviar el correo:", error);
  }
};
