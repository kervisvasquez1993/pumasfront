import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>    <button className="whatsapp-button colorPrimary" data-tooltip-id="my-tooltip" data-tooltip-content={"Reservar Recorrido"} onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </button>
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default WhatsAppButton;
