import React, { useEffect, useState } from "react";
import { getFooter, getWhatsapp, langAll } from "../../../apis/ApiBackend";
import Main from "../../../Layout/Main/Main";
import HeaderComponents from "../../../components/UI/HeaderComponents/HeaderComponets";
import useScreenSize from "../../../hooks/useScreenSize";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import useMenu from "../../../hooks/useMenu";
import { useRouter } from "next/router";
import { obtenerFrase } from "../../../lang/traducciones";

const Contact = ({ whatsapp, footer }) => {
  //console.log(whatsapp)
  const { query } = useRouter();
  const { loadedFooter, loadedWhatsapp } = useMenu();
  const { lang } = query;
  useEffect(() => {
    loadedFooter(footer);
    loadedWhatsapp(whatsapp);
  }, [lang]);
  const nombreLang = obtenerFrase(query.lang, "nombreForm");
  const correoForm = obtenerFrase(query.lang, "correoForm");
  const fechaForm = obtenerFrase(query.lang, "fechaForm");
  const horaForm = obtenerFrase(query.lang, "horaForm");
  const cantidadAdultosForm = obtenerFrase(query.lang, "cantidadAdultosForm");
  const cantidadNinosForm = obtenerFrase(query.lang, "cantidadNinosForm");
  const descripcionForm = obtenerFrase(query.lang, "descripcionForm");
  const requiereGuiaForm = obtenerFrase(query.lang, "requiereGuiaForm");
  const contactarForm = obtenerFrase(query.lang, "contactarForm");
  const sent = obtenerFrase(query.lang, "enviarMensaje");
  const { screenSize } = useScreenSize();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    hora: "",
    cantidadAdultos: "",
    cantidadNinos: "",
    descripcion: "",
    requiereGuia: "",
  });

  const [loadingForm, setLoadingForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [responseSubmitForm, setResponseSubmitForm] = useState("");
  const [startDate, setStartDate] = useState(null);

  const handleInputChange = (e, name = null) => {
    if (name === "fecha") {
      if (e instanceof Date) {
        const selectedDate = e;
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();

        // Extraer el año, mes y día de selectedDate
        const selectedYear = selectedDate.getFullYear();
        const selectedMonth = selectedDate.getMonth();
        const selectedDay = selectedDate.getDate();

        // Comparar las fechas sin tener en cuenta la hora
        if (
          selectedYear < currentYear ||
          (selectedYear === currentYear && selectedMonth < currentMonth) ||
          (selectedYear === currentYear &&
            selectedMonth === currentMonth &&
            selectedDay < currentDay)
        ) {
          setErrors({
            ...errors,
            fecha: "La fecha no puede ser anterior a la fecha actual.",
          });
          return;
        } else {
          const newErrors = { ...errors };
          delete newErrors.fecha;
          setErrors(newErrors);
        }
        setStartDate(e);
      }
    } else {
      // Para otros campos, manejar el cambio de valor
      if (e.target) {
        const input = e.target;
        const inputValue = input.value;
        const inputName = input.name;

        if (inputName === "hora") {
          // Validación para la hora: debe estar entre las 8 am y las 5 pm
          if (inputValue) {
            const selectedHour = parseInt(inputValue.split(":")[0], 10);
            if (selectedHour < 8 || selectedHour >= 17) {
              setErrors({
                ...errors,
                hora: "La hora debe estar entre las 8 am y las 5 pm.",
              });
            } else {
              const newErrors = { ...errors };
              delete newErrors.hora;
              setErrors(newErrors);
            }
          }
        }

        // Actualizar el estado con el nuevo valor del campo
        setFormData({
          ...formData,
          [inputName]: inputValue,
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      return;
    }
    setLoadingForm(true);

    const validationErrors = {};
    if (!formData.nombre) {
      validationErrors.nombre = "El nombre es requerido.";
    }
    if (!formData.correo) {
      validationErrors.correo = "El correo es requerido.";
    }

    if (
      Object.keys(validationErrors).length > 0 &&
      Object.keys(errors).length > 0
    ) {
      setErrors(validationErrors);
      setLoadingForm(false);
      return;
    }

    const newElement = {
      type: "Contacto",
      nombre: formData.nombre,
      correo: formData.correo,
      fecha: startDate,
      hora: formData.hora,
      cantidadAdultos: formData.cantidadAdultos,
      cantidadNinos: formData.cantidadNinos,
      descripcion: formData.descripcion,
      requiereGuia: formData.requiereGuia,
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
        hora: "",
        cantidadAdultos: "",
        cantidadNinos: "",
        descripcion: "",
      });
      setStartDate(null);
      toast.success(data.mensaje);
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
    <Main titlePage={"Contacto"} data={""}>
      <div className="container">
        <div>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
        <HeaderComponents
          classNameText={"colorPrimary chelseaFont pt-10 mt-10 px-10 mx-10 "}
          alignment={`${screenSize <= 1024 ? "center" : "center"}`}
        >
          {contactarForm}
        </HeaderComponents>

        <form onSubmit={handleSubmit} className="m-10 p-10">
          <div className="mb-4">
            <label htmlFor="nombre" className="block font-semibold mb-1">
              {nombreLang} :
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${
                errors.nombre ? "border-red-500" : ""
              }`}
              required
            />
            {errors.nombre && (
              <p className="text-red-500 mt-1">{errors.nombre}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="block font-semibold mb-1">
              {correoForm} :
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${
                errors.correo ? "border-red-500" : ""
              }`}
              required
            />
            {errors.correo && (
              <p className="text-red-500 mt-1">{errors.correo}</p>
            )}
          </div>

          <div className="mb-4 flex ">
            {" "}
            {/* Agregar la clase 'flex' y 'items-center' */}
            <div className="mr-4">
              <label htmlFor="fecha" className="block font-semibold mb-1">
                {fechaForm}:
              </label>
              <DatePicker
                id="fecha"
                name="fecha"
                selected={startDate}
                onChange={(e) => handleInputChange(e, "fecha")}
                className={`w-full border p-2 rounded ${
                  errors.fecha ? "border-red-500" : ""
                }`}
                required
              />
              {errors.fecha && (
                <p className="text-red-500 mt-1">{errors.fecha}</p>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="hora" className="block font-semibold mb-1">
                {horaForm}:
              </label>
              <input
                type="time"
                id="hora"
                name="hora"
                value={formData.hora}
                onChange={(e) => handleInputChange(e, "hora")}
                className={`w-full border p-2 rounded ${
                  errors.hora ? "border-red-500" : ""
                }`}
              />
              {errors.hora && (
                <p className="text-red-500 mt-1">{errors.hora}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="cantidadAdultos"
              className="block font-semibold mb-1"
            >
              {cantidadAdultosForm}:
            </label>
            <input
              type="number"
              id="cantidadAdultos"
              name="cantidadAdultos"
              min="0"
              value={formData.cantidadAdultos}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${
                errors.cantidadAdultos ? "border-red-500" : ""
              }`}
            />
            {errors.cantidadAdultos && (
              <p className="text-red-500 mt-1">{errors.cantidadAdultos}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="cantidadNinos" className="block font-semibold mb-1">
              {cantidadNinosForm}:
            </label>
            <input
              type="number"
              id="cantidadNinos"
              name="cantidadNinos"
              min="0"
              value={formData.cantidadNinos}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${
                errors.cantidadNinos ? "border-red-500" : ""
              }`}
            />
            {errors.cantidadNinos && (
              <p className="text-red-500 mt-1">{errors.cantidadNinos}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="requiereGuia" className="block font-semibold mb-1">
              {requiereGuiaForm}:
            </label>
            <select
              id="requiereGuia"
              name="requiereGuia"
              value={formData.requiereGuia}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${
                errors.requiereGuia ? "border-red-500" : ""
              }`}
            >
              <option value="NO" className="w-full border p-2 rounded ">
                No{" "}
              </option>
              <option value="SI" className="w-full border p-2 rounded ">
                {obtenerFrase(query.lang, "si")}
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="requiereGuia" className="block font-semibold mb-1">
              {obtenerFrase(query.lang, "procedencia")}
            </label>
            <select
              id="Nacional"
              name="Nacional"
              value={formData.Nacional}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${
                errors.requiereGuia ? "border-red-500" : ""
              }`}
            >
              <option value="Nacional" className="w-full border p-2 rounded ">
                {obtenerFrase(query.lang, "Nacional")}
              </option>
              <option value="Extrangero" className="w-full border p-2 rounded ">
                {obtenerFrase(query.lang, "Extranjero")}
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="descripcion" className="block font-semibold mb-1">
              {descripcionForm}:
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              className={`w-full border p-2 rounded ${
                errors.descripcion ? "border-red-500" : ""
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
              {sent}
            </button>
          </div>
        </form>
      </div>
    </Main>
  );
};

export default Contact;

export const getStaticProps = async ({ params }) => {
  const { lang } = params;
  const [whatsappResponse, footerResponse] = await Promise.all([
    getWhatsapp(lang),
    getFooter(lang),
  ]);
  const whatsapp = whatsappResponse?.data?.data[0]?.attributes;
  const footer = footerResponse?.data?.data[0]?.attributes?.footerInfo;
  return {
    props: {
      result: lang,
      whatsapp,
      footer,
    },
  };
};

export const getStaticPaths = async () => {
  const locales = await langAll();
  const languages = locales;
  const lang = [];
  for (const language of languages) {
    lang.push({ params: { lang: language.attributes.code } });
  }
  return {
    paths: lang,
    fallback: true,
  };
};
