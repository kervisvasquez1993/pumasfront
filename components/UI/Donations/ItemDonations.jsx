import React from "react";

const ItemDonations = ({ data, selected, onClick, className="" }) => {
  const { id, monto, donacion, imgSrc } = data;
  if (imgSrc?.data) {
    return (
      <div
        className={`item itemDonationSrc chelseaFont ${className} ${
          selected ? "selected" : ""
        }`}
        onClick={onClick}
      >
        <img src={"https://strapi-pumas-ijwsa.ondigitalocean.app" + imgSrc.data.attributes.url} />
      </div>
    );
  }
  return (
    <div
      className={`item itemDonationSrc chelseaFont ${className} ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
    >
      {donacion}
    </div>
  );
};

export default ItemDonations;
