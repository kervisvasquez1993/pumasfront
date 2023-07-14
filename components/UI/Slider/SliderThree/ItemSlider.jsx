import React from "react";

const ItemSlider = ({ srcImg, altImg, name }) => {
  return (
    <div>
      <img src={srcImg} alt={altImg} />
      <p className="legend">{name}</p>
    </div>
  );
};

export default ItemSlider;
