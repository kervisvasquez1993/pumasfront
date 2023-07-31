// SectionReverse.js
import React from "react";

const SectionReverse = ({ title, imageSrc, content }) => {
  return (
    <div className="container-section">
      <div className="grid-2">
        <div className="about-section_text">
          <h3 className="section-title">{title}</h3>
          <p>{content}</p>
        </div>
        <div className="section__imagen text-img">
          <img src={imageSrc} alt="Imagen de la sección" />
          <div className="text-em">Conoce más sobre esta sección</div>
        </div>
      </div>
    </div>
  );
};

export default SectionReverse;
