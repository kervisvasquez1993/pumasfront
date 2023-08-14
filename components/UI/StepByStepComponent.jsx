import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WrapperDonations from "./Donations/WrapperDonations";

const StepByStepComponent = ({ typeDonations }) => {
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
    // Agregar el nombre de la tarjeta como parámetro en la URL
    router.push(`/es/donations?params=${cardName}`);
    setStep(2);
  };

  const handleConfirmation = () => {
    setConfirmationData(selectedCard);
    // Agregar la información del paso anterior al state como parte de la URL
    router.push(`/es/donations?params=${selectedCard}`);
    setStep(3);
  };

  const handleStepClick = (clickedStep) => {
    if (clickedStep <= step) {
      setStep(clickedStep);
      // Restablecer datos correspondientes a pasos anteriores
      if (clickedStep === 1) {
        setSelectedCard(null);
        setConfirmationData(null);
        // Remover el parámetro de la URL cuando regresamos al paso 1
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
          className={`step ${step === 1 ? "active" : ""}`}
          onClick={() => handleStepClick(1)}
        >
          Paso 1: Seleccionar una tarjeta
        </div>
        <div
          className={`step ${step === 2 ? "active" : ""}`}
          onClick={() => handleStepClick(2)}
        >
          Paso 2: Confirmar selección
        </div>
        <div
          className={`step ${step === 3 ? "active" : ""}`}
          onClick={() => handleStepClick(3)}
        >
          Paso 3: Confirmación final
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
                  <div className="" key={elemento.id}>
                    <h1 className="colorPrimary fuenteTitulo ">{elemento.titulo}</h1>
                    <button onClick={() => handleCardSelect(elemento.slug)}>
                      Seleccionar Oso Perezoso
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
