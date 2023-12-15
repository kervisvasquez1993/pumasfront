import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import useMenu from "../hooks/useMenu";

const WhatsAppButton = () => {
  const { whatsapp } = useMenu();
  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${
      whatsapp?.numero
    }&text=${encodeURIComponent(whatsapp?.mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <button
        className="whatsapp-button colorPrimary"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={whatsapp?.mensajeIcono}
        onClick={handleClick}
      >
        <FaWhatsapp className="whatsapp-icon" />
      </button>
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default WhatsAppButton;
