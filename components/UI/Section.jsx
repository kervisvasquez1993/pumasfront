import React from "react";

const Section = ({ width, direction, className, children }) => {
  let sectionClasses = "section";
  
  // Configurar clase de ancho
  if (width) {
    sectionClasses += ` w-${width}`;
  }

  // Configurar clase de dirección de elementos hijos
  if (direction === "row") {
    sectionClasses += " flex-row";
  } else {
    sectionClasses += " flex-col";
  }

  // Agregar clases personalizadas
  if (className) {
    sectionClasses += " " + className;
  }

  return <div className={sectionClasses}>{children}</div>;
};

export default Section;
