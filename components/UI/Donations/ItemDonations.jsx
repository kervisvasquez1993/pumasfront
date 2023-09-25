import React from "react";
import { Tooltip } from 'react-tooltip'

const ItemDonations = ({ data, selected, onClick, className = "" }) => {
  const { id, monto, donacion, imgSrc } = data;
  if (imgSrc?.data) {
    return (
      <div
        className={`item itemDonationSrc chelseaFont ${className} ${selected ? "selectedItem" : ""
          }`}
        onClick={onClick}
      >
        {console.log(imgSrc.null, "imgSrc")}
        <img src={imgSrc?.data?.attributes?.url} data-tooltip-id="my-tooltip"
          data-tooltip-content={donacion} />
        <Tooltip id="my-tooltip" />
      </div>
    );
  }
  return (
    <div

      className={`item itemDonationSrc chelseaFont ${className} ${selected ? "selectedItem" : ""
        }`}
      onClick={onClick}
      data-tooltip-id="my-tooltip"
      data-tooltip-content={donacion}
    >
      <p>{monto}$</p>
      <Tooltip id="my-tooltip" />


    </div>
  );
};

export default ItemDonations;
