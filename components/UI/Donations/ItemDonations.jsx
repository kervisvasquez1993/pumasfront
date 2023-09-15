import React from "react";

const ItemDonations = ({ data, selected, onClick, className="" }) => {
  const { id, monto, donacion, imgSrc } = data;
  if (imgSrc?.data) {
    return (
      <div
        className={`item itemDonationSrc chelseaFont ${className} ${
          selected ? "selectedItem" : ""
        }`}
        onClick={onClick}
      >
        <img src={+ imgSrc.data.attributes.url} />
      </div>
    );
  }
  return (
    <div
      className={`item itemDonationSrc chelseaFont ${className} ${
        selected ? "selectedItem" : ""
      }`}
      onClick={onClick}
    >
      {donacion}
    </div>
  );
};

export default ItemDonations;
