import React from "react";

const ImgComponent = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt="Imagen"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  );
};

export default ImgComponent;
