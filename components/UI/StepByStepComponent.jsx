import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WrapperDonations from "./Donations/WrapperDonations";
import ReactMarkdown from "react-markdown";
import useDonations from "../../hooks/useDonations";
import ItemDonations from "./Donations/ItemDonations";

const StepByStepComponent = ({ typeDonations, donationAll }) => {
  const { loadedDonations, loadedParams, filterArray } = useDonations();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // selecionar el card en el paso numero 1
  const [confirmationData, setConfirmationData] = useState(null);
  const [selectedElements, setSelectedElements] = useState([]);
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
              {selectedElements.map((element) => (
                <ItemDonations
                  key={element.id}
                  data={element}
                  selected={selectedItems.includes(element.id)}
                  onClick={() => handleItemToggle(element.id)}
                />
              ))}
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
