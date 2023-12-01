export const traducciones = {
  es: {
    paso1: "Paso 1",
    paso2: "Paso 2",
    paso3: "Paso 3",
    tipo_donations: "SELECCIONA TU TIPO DE DONACIÓN",
    select_donaciones: "¿QUÉ DESEAS DONAR?",
    confirmar : "Confirmar",
    nombre : "Nombre",
    email : "Correo", 
    enviarMensaje : "Enviar",
    mensajeEnviando : "Enviando Información...",
  },
  en: {
    paso1: "Step 1",
    paso2: "Step 2",
    paso3: "Step 3",
    tipo_donations: "SELECT YOUR DONATION TYPE",
    select_donaciones: "WHAT WOULD YOU LIKE TO DONATE?",
    confirmar : "Confirm",
    nombre : "Name",
    email : "Email",
    enviarMensaje : "Send",
    mensajeEnviando : "Sending Information...",
  },
};

export const obtenerFrase = (lang, paso) => {
  const idioma = traducciones[lang] ? lang : "en";
  const frase = traducciones[idioma][paso];
  return frase || `Frase no encontrada para ${idioma} y ${paso}`;
};
