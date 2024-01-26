import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WrapperDonations from "./Donations/WrapperDonations";
import ReactMarkdown from "react-markdown";
import useDonations from "../../hooks/useDonations";
import ItemDonations from "./Donations/ItemDonations";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import DonationInfo from "./Donations/DonationInfo";
import HeaderComponents from "./HeaderComponents/HeaderComponets";
import Loader from "./Loader";
import { Tooltip } from "react-tooltip";
import { obtenerFrase } from "../../lang/traducciones";

const StepByStepComponent = ({ typeDonations, filtro }) => {
  const router = useRouter();
  const { lang } = router.query;
  const paso1 = obtenerFrase(lang, "paso1");
  const paso2 = obtenerFrase(lang, "paso2");
  const paso3 = obtenerFrase(lang, "paso3");
  const type_donations = obtenerFrase(lang, "tipo_donations");
  const select_donaciones = obtenerFrase(lang, "select_donaciones");
  const confirmar = obtenerFrase(lang, "confirmar");
  const nombre = obtenerFrase(lang, "nombre");
  const correo = obtenerFrase(lang, "email");
  const enviendo = obtenerFrase(lang, "mensajeEnviando");
  const enviar  = obtenerFrase(lang, "enviarMensaje");
  const validateName = obtenerFrase(lang, "validateName");
  const validateEmail = obtenerFrase(lang, "validateEmail");
  const [selectedItems, setSelectedItems] = useState([]);
  const [donationInitial, setDonationInitial] = useState(typeDonations);
  const [responseSubmitForm, setResponseSubmitForm] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [confirmationData, setConfirmationData] = useState(null);
  const [selectedElements, setSelectedElements] = useState([]);
  const [donationInfo, setDonationInfo] = useState(null);
  const [loadingForm, setLoadingForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
  });
  const [step, setStep] = useState(1);
  
  useEffect(() => {
    setDonationInitial(typeDonations);
  }, [typeDonations]);
   
  useEffect(() => {
    const { params } = router.query;
    if (params) {
      setStep(2);
    }
  }, [router.query]);

  const handleItemToggle = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleCardSelect = (cardName) => {
    setSelectedCard(cardName);
    router.push(`/${lang}/donations?params=${cardName}`);
    setStep(2);
    setDonationInfo(null);
  };

  const handleConfirmation = () => {
    const updatedSelectedElements = filtro.filter((element) =>
      selectedItems.includes(element.id)
    );

    if (updatedSelectedElements.length > 0) {
      setSelectedElements(updatedSelectedElements);
      setStep(3);
    } else {
      console.log("Debe seleccionar al menos un elemento antes de continuar.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingForm(true);

    const validationErrors = {};
    if (!formData.nombre) {
      validationErrors.nombre = validateName
    }
    if (!formData.correo) {
      validationErrors.correo = validateEmail;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoadingForm(false);
      return;
    }
    const newElement = {
      type: "Donación",
      nombre: formData.nombre,
      correo: formData.correo,
      monto: selectedElements.reduce(
        (total, element) => total + parseFloat(element.monto || 0),
        0
      ),
      donacion: selectedElements.map((element) => element.donacion).flat(),
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
      setDonationInfo(newElement);
      setFormData({ nombre: "", correo: "" });
      console.log(data);
      setResponseSubmitForm(data.mensaje);
      setTimeout(() => {
        setResponseSubmitForm("");
      }, 5000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
    setLoadingForm(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newElement = {
      nombre: formData.nombre,
      correo: formData.correo,
      monto: selectedElements.reduce(
        (total, element) => total + parseFloat(element.monto || 0),
        0
      ),
      donacion: selectedElements.map((element) => element.donacion).flat(),
    };

    setDonationInfo(newElement);
    setFormData({ nombre: "", correo: "" });
  };

  const handleStepClick = (clickedStep) => {
    if (clickedStep <= step) {
      setStep(clickedStep);
      if (clickedStep === 1) {
        router.push(`/${lang}/donations`);
        setSelectedCard(null);
        setConfirmationData(null);
        setSelectedItems([]);
        setDonationInfo(null);
      } else if (clickedStep === 2) {
        setConfirmationData(null);
        setDonationInfo(null);
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderHeader = () => {
    return (
      <div className="step-header">
        <h3
          className={`step fontSize36 chelseaFont ${
            step >= 1 ? "carActive colorPrimary" : "colorGris carInactive"
          }`}
          onClick={() => handleStepClick(1)}
        >
          {paso1}
        </h3>
        <h3
          className={`step fontSize36 chelseaFont ${
            step >= 2 ? "carActive colorPrimary" : "colorGris carInactive"
          }`}
          onClick={() => handleStepClick(2)}
        >
          {paso2}
        </h3>
        <h3
          className={`step fontSize36 chelseaFont ${
            step >= 3 ? "carActive colorPrimary" : "colorGris carInactive"
          }`}
          onClick={() => handleStepClick(3)}
        >
          {paso3}
        </h3>
      </div>
    );
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            {renderHeader()}
            <HeaderComponents
              src="/images/fondo1.png"
              classNameText={
                "py-10 my-10 colorGris chelseaFont font-responsive"
              }
              alignment="start"
            >
              {type_donations}
            </HeaderComponents>

            <WrapperDonations>
              {donationInitial?.map((elemento, index) => {
                
                return (
                  <div className="lg:py-10 lg:my-10 p-5" key={index}>
                    <figure className="lg:p-1 p-1 m-10">
                      {elemento?.imagen?.data?.attributes?.url ? (
                        <img src={elemento.imagen.data.attributes.url} />
                      ) : (
                        <img src={"/images/Ellipse.png"} />
                      )}
                    </figure>
                    <h2 className="colorPrimary fuenteTitulo ">
                      {elemento.titulo}
                    </h2>

                    <div className="inline">
                      <span className="fontBold">Beneficios </span> :
                      <ReactMarkdown className="fuentesParrafo">
                        {elemento.beneficio}
                      </ReactMarkdown>
                    </div>

                    <br />

                    <ReactMarkdown className="fuentesParrafo">
                      {elemento.descripcion}
                    </ReactMarkdown>
                    <button
                      className="backgroundPrimary text-center fontMenu btnPrimaryMenu font-bold py-2 mt-10 rounded w-100"
                      onClick={() => handleCardSelect(elemento.slug)}
                    >
                      Seleccionar
                    </button>
                  </div>
                );
              })}
            </WrapperDonations>
          </div>
        );
      case 2:
        return (
          <div>
            {renderHeader()}
            <HeaderComponents
              src="/images/fondo1.png"
              classNameText={
                "lg:py-10 lg:my-10 p-5 colorGris chelseaFont font-responsive"
              }
              alignment="start"
            >
              {select_donaciones}
            </HeaderComponents>
            <section className="itemDonationWrapper py-10 my-10">
              {filtro
                ? filtro?.map((element, index) => {
                    return (
                      <div key={index}>
                        <ItemDonations
                          data={element}
                          selected={selectedItems.includes(element.id)}
                          onClick={() => handleItemToggle(element.id)}
                        />
                      </div>
                    );
                  })
                : "Loading..."}
            </section>
            <div className="center">
              <button
                className=" backgroundPrimary my-10 py-10 center manropeFont p-5 btnPrimary py-2  "
                onClick={handleConfirmation}
              >
                {confirmar}
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            {renderHeader()}
            <HeaderComponents
              src="/images/fondo1.png"
              classNameText={
                "lg:py-10 lg:my-10 p-5 colorGris chelseaFont font-responsive"
              }
              alignment="start"
            >
              {type_donations}
            </HeaderComponents>

            {responseSubmitForm && (
              <HeaderComponents
                src="/images/fondo1.png"
                classNameText={""}
                alignment="center"
              >
                <span className="backgroundPrimary m-0 manropeFont p-5 btnPrimary py-2">
                  {responseSubmitForm}
                </span>
              </HeaderComponents>
            )}

            <section className="itemDonationWrapper">
              <TwoColumnGrid width={"100%"}>
                <section>
                  {selectedElements.map((element, index) => (
                    <ItemDonations
                      className=" my-5"
                      key={index}
                      data={element}
                      selected={selectedItems.includes(element.id)}
                      onClick={() => handleItemToggle(element.id)}
                    />
                  ))}
                </section>
                <>
                  {donationInfo && <DonationInfo newElement={donationInfo} />}
                  {!donationInfo && (
                    <form onSubmit={handleSubmit} className="mt-4">
                      <div className="mb-4">
                        <label
                          htmlFor="nombre"
                          className="block font-semibold mb-1"
                        >
                          {nombre}: 
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className="w-full border p-2 rounded"
                        />
                        {errors.nombre && (
                          <p className="text-red-500">{errors.nombre}</p>
                        )}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="correo"
                          className="block font-semibold mb-1"
                        >
                          {correo}:
                        </label>
                        <input
                          type="email"
                          id="correo"
                          name="correo"
                          value={formData.correo}
                          onChange={handleInputChange}
                          className="w-full border p-2 rounded"
                        />
                        {errors.correo && (
                          <p className="text-red-500">{errors.correo}</p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="backgroundPrimary m-0 manropeFont p-5 btnPrimary py-2"
                        disabled={loadingForm}
                      >
                        {loadingForm ? enviendo : enviar}
                      </button>
                    </form>
                  )}
                </>
              </TwoColumnGrid>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default StepByStepComponent;
