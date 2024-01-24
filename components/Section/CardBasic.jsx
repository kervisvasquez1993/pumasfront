import React from "react";

const CardBasic = ({ imgSrc, showMask, maskSrc=false, iconSrc, title, subtitle }) => {
  console.log(iconSrc)
  return (
    <section className="wrapperElement lg:p-10">
      <div className="imagen-container p-5">
        <img className="imagen" src={imgSrc} alt={imgSrc} />
        {showMask && (
          <img className="imagen-superpuesta" src={maskSrc} alt={maskSrc} />
        )}
       { iconSrc && (<img className="imagen-icono-animal" src={iconSrc} alt={iconSrc} />)} 
      </div>
      <section className="container-card">
        <div className="contentElemenCard">
          <h3 className="title-animal fuentesParrafo">{title}</h3>
          <p className="paragraft-venedo">{subtitle}</p>
        </div>
      </section>
    </section>
  );
};

export default CardBasic;
