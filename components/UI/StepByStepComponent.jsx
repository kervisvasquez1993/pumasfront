import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WrapperDonations from "./Donations/WrapperDonations";
import ReactMarkdown from "react-markdown";

const StepByStepComponent = ({ typeDonations }) => {
  console.log(typeDonations);
  const [selectedCard, setSelectedCard] = useState(null);
  const [confirmationData, setConfirmationData] = useState(null);
  const [step, setStep] = useState(1);
  const router = useRouter();

  useEffect(() => {
    // Obtener el valor del parámetro 'params' de la URL
    const paramsValue = router.query.params;

    // Si el parámetro 'params' está presente en la URL, ir al paso 2
    if (paramsValue) {
      setStep(2);
    }
  }, []);

  const handleCardSelect = (cardName) => {
    setSelectedCard(cardName);
    router.push(`/es/donations?params=${cardName}`);
    setStep(2);
  };

  const handleConfirmation = () => {
    setConfirmationData(selectedCard);
    router.push(`/es/donations?params=${selectedCard}`);
    setStep(3);
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
          className={`step fontSize36 ${step === 1 ? "carActive colorPrimary" : "colorGris carInactive"}`}
          onClick={() => handleStepClick(1)}
        >
          Paso 1
        </div>
        <div
          className={`step fontSize36 ${step === 2 ? "carActive colorPrimary" : "colorGris carInactive"}`}
          onClick={() => handleStepClick(2)}
        >
          Paso 2
        </div>
        <div
          className={`step fontSize36 ${step === 3 ? "carActive colorPrimary" : "colorGris carInactive"}`}
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
            <button onClick={handleConfirmation}>Confirmar</button>
          </div>
        );
      case 3:
        return (
          <div>
            {renderHeader()}
            <p>Confirmado: {confirmationData}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default StepByStepComponent;
