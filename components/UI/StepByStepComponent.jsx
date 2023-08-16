import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WrapperDonations from "./Donations/WrapperDonations";
import ReactMarkdown from "react-markdown";
import useDonations from "../../hooks/useDonations";
import ItemDonations from "./Donations/ItemDonations";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import DonationInfo from "./Donations/DonationInfo";

const StepByStepComponent = ({ typeDonations, donationAll }) => {
  const { loadedDonations, loadedParams, filterArray } = useDonations();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // selecionar el card en el paso numero 1
  const [confirmationData, setConfirmationData] = useState(null);
  const [selectedElements, setSelectedElements] = useState([]);
  const [donationInfo, setDonationInfo] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
  });
  const [step, setStep] = useState(1);
  const router = useRouter();
  const handleItemToggle = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };
  useEffect(() => {
    const { params } = router.query;
    if (params) {
      loadedDonations(donationAll);
      loadedParams(params);
      setStep(2);
    }
  }, [router.query]);
  const handleCardSelect = (cardName) => {
    setSelectedCard(cardName);
    console.log(cardName, "selected card");
    router.push(`/es/donations?params=${cardName}`);
    setStep(2);
  };
  const handleConfirmation = () => {
    const updatedSelectedElements = donationAll.filter((element) =>
      selectedItems.includes(element.id)
    );

    if (updatedSelectedElements.length > 0) {
      setSelectedElements(updatedSelectedElements);
      setStep(3);
    } else {
      console.log("Debe seleccionar al menos un elemento antes de continuar.");
    }
  };
  const handleStepClick = (clickedStep) => {
    if (clickedStep <= step) {
      setStep(clickedStep);
      if (clickedStep === 1) {
        setSelectedCard(null);
        setConfirmationData(null);
        router.push("/es/donations");
      } else if (clickedStep === 2) {
        setConfirmationData(null);
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newElement = {
      nombre: formData.nombre,
      correo: formData.correo,
      monto: selectedElements.reduce(
        (total, element) => total + parseFloat(element.monto),
        0
      ),
      donacion: selectedElements.map((element) => element.donacion).flat(),
    };

    setDonationInfo(newElement);
    setFormData({ nombre: "", correo: "" });
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
        <div
          className={`step fontSize36 ${
            step === 1 ? "carActive colorPrimary" : "colorGris carInactive"
          }`}
          onClick={() => handleStepClick(1)}
        >
          Paso 1
        </div>
        <div
          className={`step fontSize36 ${
            step === 2 ? "carActive colorPrimary" : "colorGris carInactive"
          }`}
          onClick={() => handleStepClick(2)}
        >
          Paso 2
        </div>
        <div
          className={`step fontSize36 ${
            step === 3 ? "carActive colorPrimary" : "colorGris carInactive"
          }`}
          onClick={() => handleStepClick(3)}
        >
          Paso 3
        </div>
      </div>
    );
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            {renderHeader()}

            <WrapperDonations>
              {typeDonations.map((elemento) => {
                return (
                  <div className="py-10 my-10" key={elemento.id}>
                    <figure className="p-10 m-10">
                      {elemento.image ? (
                        <img src={elemento.image} />
                      ) : (
                        <img src={"/images/Ellipse.png"} />
                      )}
                    </figure>
                    <h1 className="colorPrimary fuenteTitulo ">
                      {elemento.titulo}
                    </h1>

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
            <p>Has seleccionado: {selectedCard}</p>
            <section className="itemDonationWrapper">
              {filterArray &&
                filterArray.map((element) => {
                  return (
                    <ItemDonations
                      key={element.id}
                      data={element}
                      selected={selectedItems.includes(element.id)}
                      onClick={() => handleItemToggle(element.id)}
                    />
                  );
                })}
            </section>
            <button onClick={handleConfirmation}>Confirmar</button>
          </div>
        );
      case 3:
        return (
          <div>
            {renderHeader()}
            <p>Confirmado: {confirmationData}</p>
            <section className="itemDonationWrapper">
              <TwoColumnGrid width={"100%"}>
                <section>
                  {selectedElements.map((element) => (
                    <ItemDonations
                      className=" my-5"
                      key={element.id}
                      data={element}
                      selected={selectedItems.includes(element.id)}
                      onClick={() => handleItemToggle(element.id)}
                    />
                  ))}

                  
                </section>
                {donationInfo && <DonationInfo newElement={donationInfo} />}
                {!(donationInfo) && <form onSubmit={handleFormSubmit} className="mt-4">
                  <div className="mb-4">
                    <label
                      htmlFor="nombre"
                      className="block font-semibold mb-1"
                    >
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
                  <div className="mb-4">
                    <label
                      htmlFor="correo"
                      className="block font-semibold mb-1"
                    >
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
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Enviar
                  </button>
                </form>}
                
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
