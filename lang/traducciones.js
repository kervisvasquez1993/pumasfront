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
    validateName : "El nombre es requerido.",
    validateEmail : "El correo es requerido.",
    patrocinadores : "Patrocinadores",
    nombreForm: "Nombre",
    correoForm: "Correo",
    fechaForm : "Fecha de Reser",
    horaForm: "Hora",
    cantidadAdultosForm: "Cantidad de Adultos",
    cantidadNinosForm: "Cantidad de Niños",
    descripcionForm: "Descripción",
    requiereGuiaForm : "Requiere Guía",
    contactarForm : "Contactar",
    conoceMas : "Conoce Más"
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
    validateName : "The name is required.",
    validateEmail : "The email is required.",
    patrocinadores : "Sponsors",
    nombreForm: "Name",
    correoForm: "Email",
    fechaForm : "Date of Reser",
    horaForm : "Time",
    cantidadAdultosForm : "Number of Adults",
    cantidadNinosForm : "Number of Ninos",
    descripcionForm : "Description",
    requiereGuiaForm : "Require Guia",
    contactarForm : "Contact",
    conoceMas : "Know more"
  },
};

export const obtenerFrase = (lang, paso) => {
  const idioma = traducciones[lang] ? lang : "en";
  const frase = traducciones[idioma][paso];
  return frase || `Frase no encontrada para ${idioma} y ${paso}`;
};
