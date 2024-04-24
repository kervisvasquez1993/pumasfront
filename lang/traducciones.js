export const traducciones = {
  es: {
    paso1: 'Paso 1',
    paso2: 'Paso 2',
    paso3: 'Paso 3',
    tipo_donations: 'SELECCIONA TU TIPO DE DONACIÓN',
    select_donaciones: '¿QUÉ DESEAS DONAR?',
    confirmar: 'Confirmar',
    nombre: 'Nombre',
    email: 'Correo',
    enviarMensaje: 'Enviar',
    mensajeEnviando: 'Enviando Información...',
    validateName: 'El nombre es requerido.',
    validateEmail: 'El correo es requerido.',
    patrocinadores: 'Patrocinadores',
    nombreForm: 'Nombre',
    correoForm: 'Correo',
    fechaForm: 'Fecha de Reserva',
    horaForm: 'Hora',
    cantidadAdultosForm: 'Cantidad de Adultos',
    cantidadNinosForm: 'Cantidad de Niños',
    descripcionForm: 'Descripción',
    requiereGuiaForm: 'Requiere Guía',
    contactarForm: 'Contactar',
    conoceMas: 'Conoce Más',
    descargar: 'Descargar',
    ver: 'Ver',
    ReservaTuRecorrido: 'Reserva tu recorrido',
    verMas: 'Ver Más',
    seleccionar: 'Seleccionar',
    inputNombre: 'Nombre',
    illustration3d: 'ILUSTRACION MAPA 3D',
    categoriaPatrocinadores: 'Categoría de Patrocinadores',
    tipoPatrocinadores: 'Tiempo de patrocinio',
    patrocinioMensual: 'Patrocinio Mensual',
    patrocinioSemestral: 'Patrocinio Semestral',
    patrocinioAnual: 'Patrocinio Anual',
    donacion: 'Donación',
    monto : 'Monto',
    tipoDeDonacion : 'Especie a patrocinar',
    Especies : 'Nombre del animal',
    detallesDeESpecie : 'Detalles de la Especie',
    successMensaje: 'Tu mensaje ha sido enviado exitosamente',
    manana : 'Mañana',
    seleccionar_option : "Seleccione una opción",
    habitat_name : "Nombre del hábitat",
    habitad_sponsor : "Hábitat a patrocinar",
    ecosistema_sponsor : "Ecosistema a patrocinar",
    type_donation : "Tipo de donación",
    especie : "Especie",
    si : "Si",
    no : "No",
    procedencia : "Procedencia",
    Nacional : "National",
    Extranjero: "Extranjero",
    ApoyarAnimal : " Apoyar Animal"

  },
  en: {
    paso1: 'Step 1',
    paso2: 'Step 2',
    paso3: 'Step 3',
    tipo_donations: 'SELECT YOUR DONATION TYPE',
    select_donaciones: 'WHAT WOULD YOU LIKE TO DONATE?',
    confirmar: 'Confirm',
    nombre: 'Name',
    email: 'Email',
    enviarMensaje: 'Send',
    mensajeEnviando: 'Sending Information...',
    validateName: 'The name is required.',
    validateEmail: 'The email is required.',
    patrocinadores: 'Sponsors',
    nombreForm: 'Name',
    correoForm: 'Email',
    fechaForm: 'Booking date',
    horaForm: 'Time',
    cantidadAdultosForm: 'Number of Adults',
    cantidadNinosForm: 'Number of Ninos',
    descripcionForm: 'Description',
    requiereGuiaForm: 'Required guide',
    contactarForm: 'Contact',
    conoceMas: 'LEARN MORE',
    descargar: 'Download',
    ver: 'Show',
    ReservaTuRecorrido: 'Book your tour',
    verMas: 'See More',
    seleccionar: 'Select',
    inputNombre: 'Name',
    illustration3d: '3D MAP ILLUSTRATION',
    categoriaPatrocinadores: 'Sponsorship Category',
    tipoPatrocinadores: 'Type of Sponsors',
    patrocinioMensual : 'Monthly Sponsorship',
    patrocinioSemestral : 'Semestral Sponsorship',
    patrocinioAnual : 'Annual Sponsorship',
    donacion : 'Donation',
    monto : 'Amount',
    tipoDeDonacion : 'Species to sponsor',
    Especies : 'Species',
    especie : 'Species',
    detallesDeESpecie : 'Details of the Species',
    successMensaje: 'Your message has been sent successfully', 
    manana : 'Tomorrow',
    seleccionar_option : "Select an option",
    habitat_name : "Habitat name",
    habitad_sponsor : "Habitat to sponsor",
    ecosistema_sponsor : "Ecological system to sponsor",
    type_donation : "Type of donation",
    si : "Yes",
    no: "No",
    procedencia : "Origin",
    Nacional : "National  ",
    Extranjero: "Foreign",
    ApoyarAnimal : "Support Animal"

    
  },
}

export const obtenerFrase = (lang, paso) => {
  const idioma = traducciones[lang] ? lang : 'en'
  const frase = traducciones[idioma][paso]
  return frase || `Frase no encontrada para ${idioma} y ${paso}`
}
