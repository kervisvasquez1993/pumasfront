import React from "react";

const ItemDonations = ({ data, selected, onClick }) => {
  const { id, monto, donacion, imgSrc } = data;
  if (imgSrc.data) {
    console.log(imgSrc.data.attributes.url);
    return (
      <div
        className={`item itemDonationSrc chelseaFont ${
          selected ? "selected" : ""
        }`}
        onClick={onClick}
      >
        <img src={"http://localhost:1337" + imgSrc.data.attributes.url} />
      </div>
    );
  }
  return (
    <div
      className={`item itemDonationSrc chelseaFont ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
    >
      {donacion}
    </div>
  );
};

export default ItemDonations;
