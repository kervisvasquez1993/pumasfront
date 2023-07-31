// Section.js
import React from "react";

const Section = ({ title, imageSrc, content }) => {
  return (
    <div className="container-section">
      <div className="grid-2">
        <div className="section__imagen">
          <img src={imageSrc} alt="Imagen de la sección" />
        </div>
        <div className="about-section_text">
          <h3 className="section-title">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
