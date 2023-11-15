import React from "react";
import { Tooltip } from 'react-tooltip'

const ItemDonations = ({ data, selected, onClick, className = "" }) => {
  // console.log(data)
  const { id,  monto, donacion, imgSrc } = data;
  // console.log(donacion, "donations")
  if (imgSrc?.data) {
    return (
      <div
        className={`item itemDonationSrc chelseaFont ${className} ${selected ? "selectedItem" : ""
          }`}
        onClick={onClick}
      >
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
