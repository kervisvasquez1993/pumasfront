import React, { useState } from 'react'
import { langAll } from '../../../apis/ApiBackend';
import Main from '../../../Layout/Main/Main';
import HeaderComponents from '../../../components/UI/HeaderComponents/HeaderComponets';
import useScreenSize from '../../../hooks/useScreenSize';
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { screenSize } = useScreenSize();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    fecha: "",
    hora: "",
    cantidadAdultos: "",
    cantidadNinos: "",
    descripcion: "",
    requiereGuia: ""
  });

  const [loadingForm, setLoadingForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [responseSubmitForm, setResponseSubmitForm] = useState("");

  const handleInputChange = (e, name = null) => {
    const input = e.target;
  
    if (name === "hora") {
      // Validación para la hora: debe estar entre las 8 am y las 5 pm
      if (input && input.value) {
        const selectedHour = parseInt(input.value.split(":")[0], 10);
        if (selectedHour < 8 || selectedHour >= 17) {
          // Hora inválida, muestra un mensaje de error
          setErrors({
            ...errors,
            hora: "La hora debe estar entre las 8 am y las 5 pm.",
          });
        } else {
          // Hora válida, borra el mensaje de error si existía previamente
          const newErrors = { ...errors };
          delete newErrors.hora;
          setErrors(newErrors);
        }
      }
    }
  
    if (name === "fecha") {
      console.log(input.value)
      // Validación para la fecha: no se permite seleccionar una fecha anterior a la actual
      if (input && input.value) {
        
        const selectedDate = new Date(input.value);
        const currentDate = new Date();
  
        if (selectedDate < currentDate) {
          // Fecha inválida, puedes mostrar un mensaje de error
          setErrors({
            ...errors,
            fecha: "La fecha no puede ser anterior a la fecha actual.",
          });
          return;
        } else {
          // Fecha válida, borra el mensaje de error si existía previamente
          const newErrors = { ...errors };
          delete newErrors.fecha;
          setErrors(newErrors);
        }
      }
    }
  
    // Actualiza el estado con el nuevo valor del campo
    if (e.target) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  }

  // const notify = () => toast("Wow so easy!");
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoadingForm(true);

    const validationErrors = {};
    if (!formData.nombre) {
      validationErrors.nombre = "El nombre es requerido.";
    }
    if (!formData.correo) {
      validationErrors.correo = "El correo es requerido.";
    }
    if (!formData.fecha) {
      validationErrors.fecha = "La fecha es requerida.";
    }



    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoadingForm(false);
      return;
    }

   
    const newElement = {
      type: "Contacto",
      nombre: formData.nombre,
      correo: formData.correo,
      fecha: formData.fecha,
      hora: formData.hora,
      cantidadAdultos: formData.cantidadAdultos,
      cantidadNinos: formData.cantidadNinos,
      descripcion: formData.descripcion,
      requiereGuia: formData.requiereGuia
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newElement),
      });

      const data = await res.json();

      setFormData({
        nombre: "",
        correo: "",
        fecha: "",
        hora: "",
        cantidadAdultos: "",
        cantidadNinos: "",
        descripcion: "",
      });
      console.log(data, "desde data");
      toast(data.mensaje);
      setResponseSubmitForm(data.mensaje);

      setTimeout(() => {
        setResponseSubmitForm("");
      }, 5000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
    setLoadingForm(false);
  };

  return (
    <Main titlePage={"Contacto"}>
      <div className="container">
        <div>
          <ToastContainer position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
        </div>
        <HeaderComponents
          classNameText={"colorPrimary chelseaFont pt-10 mt-10 px-10 mx-10 "}
          alignment={`${screenSize <= 1024 ? "center" : "center"}`}
        >
          Contactar
        </HeaderComponents>

        <form onSubmit={handleSubmit} className="m-10 p-10">
          <div className="mb-4">
            <label htmlFor="nombre" className="block font-semibold mb-1">
              Nombre Completo:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${errors.nombre ? "border-red-500" : ""
                }`}
              required
            />
            {errors.nombre && <p className="text-red-500 mt-1">{errors.nombre}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="block font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${errors.correo ? "border-red-500" : ""
                }`}
              required
            />
            {errors.correo && <p className="text-red-500 mt-1">{errors.correo}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="fecha" className="block font-semibold mb-1">
              Fecha Reserva:
            </label>
            <DatePicker
              id="fecha"
              name="fecha"
              selected={formData.fecha}
              value={formData.fecha}
              onChange={(e) => handleInputChange(e, 'hora')}
              className={`w-full border p-2 rounded ${errors.fecha ? "border-red-500" : ""
                }`}
              required
            />
            {errors.fecha && <p className="text-red-500 mt-1">{errors.fecha}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="hora" className="block font-semibold mb-1">
              Hora:
            </label>
            <input
              type="time"
              id="hora"
              name="hora"
              value={formData.hora}
              onChange={(e) => handleInputChange(e, 'hora')}
              className={`w-full border p-2 rounded ${errors.hora ? "border-red-500" : ""
                }`}
            />
            {errors.hora && <p className="text-red-500 mt-1">{errors.hora}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="cantidadAdultos" className="block font-semibold mb-1">
              Cantidad de Adultos:
            </label>
            <input
              type="number"
              id="cantidadAdultos"
              name="cantidadAdultos"
              min="0"
              value={formData.cantidadAdultos}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${errors.cantidadAdultos ? "border-red-500" : ""
                }`}
            />
            {errors.cantidadAdultos && (
              <p className="text-red-500 mt-1">{errors.cantidadAdultos}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="cantidadNinos" className="block font-semibold mb-1">
              Cantidad de Niños:
            </label>
            <input
              type="number"
              id="cantidadNinos"
              name="cantidadNinos"
              min="0"
              value={formData.cantidadNinos}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${errors.cantidadNinos ? "border-red-500" : ""
                }`}
            />
            {errors.cantidadNinos && (
              <p className="text-red-500 mt-1">{errors.cantidadNinos}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="requiereGuia" className="block font-semibold mb-1">
              Requiere Guía:
            </label>
            <select
              id="requiereGuia"
              name="requiereGuia"
              value={formData.requiereGuia}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${errors.requiereGuia ? "border-red-500" : ""
                }`}
            >
              <option value="NO" className='w-full border p-2 rounded '>NO</option>
              <option value="SI" className='w-full border p-2 rounded '>SI</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="descripcion" className="block font-semibold mb-1">
              Descripción:
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${errors.descripcion ? "border-red-500" : ""
                }`}
              rows="4"
            />
            {errors.descripcion && (
              <p className="text-red-500 mt-1">{errors.descripcion}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="backgroundPrimary m-0 manropeFont p-5 btnPrimary py-2"
            >
              Enviar
            </button>
          </div>
        </form>




      </div>
    </Main>

  )
}

export default Contact

export const getStaticProps = async ({ params }) => {
  const { lang } = params;




  return {
    props: {
      result: lang
    },
  };
};

export const getStaticPaths = async () => {
  const locales = await langAll();
  const languages = locales.data;
  const lang = [];
  for (const language of languages) {
    lang.push({ params: { lang: language.code } });
  }
  // console.log(lang);
  return {
    paths: lang,
    fallback: true,
  };
};