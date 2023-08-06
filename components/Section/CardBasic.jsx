import React from "react";

const CardBasic = ({ imgSrc, showMask, maskSrc=false, iconSrc, title, subtitle }) => {
  return (
    <section className="wrapperElement px-10 mx-10">
      <div className="imagen-container">
        <img className="imagen" src={imgSrc} alt={imgSrc} />
        {showMask && (
          <img className="imagen-superpuesta" src={maskSrc} alt={maskSrc} />
        )}
        <img className="imagen-icono-animal" src={iconSrc} alt={iconSrc} />
      </div>
      <section className="imagen-container">
        <div className="contentElemenCard">
          <h3 className="title-animal fuentesParrafo">{title}</h3>
          <p className="paragraft-venedo">{subtitle}</p>
        </div>
      </section>
    </section>
  );
};

export default CardBasic;
