

export function convertirHora(hora24) {
    // Validar que la entrada sea una cadena con el formato correcto (HH:MM:SS)
    if (!/^\d{2}:\d{2}:\d{2}$/.test(hora24)) {
        return 'Formato de hora no válido';
    }

    // Separar las partes de la hora
    const partes = hora24.split(':');
    const horas = parseInt(partes[0], 10);
    const minutos = partes[1];

    // Determinar si es AM o PM
    const ampm = horas >= 12 ? 'PM' : 'AM';

    // Convertir las horas al formato de 12 horas
    const horas12 = horas % 12 || 12; // Si es 0, se convierte en 12 en el formato de 12 horas

    // Crear la hora en formato de 12 horas
    const hora12 = `${horas12}:${minutos} ${ampm}`;

    return hora12;
}
