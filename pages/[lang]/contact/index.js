import React, { useState } from 'react'
import { langAll } from '../../../apis/ApiBackend';
import Main from '../../../Layout/Main/Main';
import HeaderComponents from '../../../components/UI/HeaderComponents/HeaderComponets';
import useScreenSize from '../../../hooks/useScreenSize';

const Contact = () => {
  const { screenSize } = useScreenSize()
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono : "",
    fecha : "",
    descripcion  :""

  });
  const [contactoInfo, setContactoInfo] = useState(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newElement = {
      nombre: formData.nombre,
      correo: formData.correo,
      telefono : formData.telefono,
      fecha : formData.fecha,
      descripcion : formData.descripcion
    };

    setContactoInfo(newElement);
    setFormData({ nombre: "", correo: "" });
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Main titlePage={"Contacto"}>
      <div className="container">
        <HeaderComponents
          classNameText={"colorPrimary chelseaFont pt-10 mt-10 px-10 mx-10 "}
          alignment={`${screenSize <= 1024 ? "center" : "center"}`}
        >
          Contactar
        </HeaderComponents>

        <form onSubmit={handleFormSubmit} className="m-10 p-10">
  <div className="mb-4">
    <label htmlFor="nombre" className="block font-semibold mb-1">
      Nombre:
    </label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      value={formData.nombre}
      onChange={handleInputChange}
      className="w-full border p-2 rounded"
    />
  </div>
   {/* Campo para el número de teléfono */}
   <div className="mb-4">
    <label htmlFor="telefono" className="block font-semibold mb-1">
      Teléfono:
    </label>
    <input
      type="tel"
      id="telefono"
      name="telefono"
      value={formData.telefono}
      onChange={handleInputChange}
      className="w-full border p-2 rounded"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="correo" className="block font-semibold mb-1">
      Correo:
    </label>
    <input
      type="email"
      id="correo"
      name="correo"
      value={formData.correo}
      onChange={handleInputChange}
      className="w-full border p-2 rounded"
    />
  </div>

  {/* Campo para la fecha */}
  <div className="mb-4">
    <label htmlFor="fecha" className="block font-semibold mb-1">
      Fecha:
    </label>
    <input
      type="date"
      id="fecha"
      name="fecha"
      value={formData.fecha}
      onChange={handleInputChange}
      className="w-full border p-2 rounded"
    />
  </div>

  {/* Campo para la descripción */}
  <div className="mb-4">
    <label htmlFor="descripcion" className="block font-semibold mb-1">
      Descripción:
    </label>
    <textarea
      id="descripcion"
      name="descripcion"
      value={formData.descripcion}
      onChange={handleInputChange}
      className="w-full border p-2 rounded"
      rows="4" // Ajusta la cantidad de filas según sea necesario
    />
  </div>

 

  <button
    type="submit"
    className="backgroundPrimary m-0 manropeFont p-5 btnPrimary py-2"
  >
    Enviar
  </button>
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