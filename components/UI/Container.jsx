import React from "react";

const Container = ({ fullWidth, center, left, right, direction, className, children }) => {
  let containerClasses = "container";
  
  // Configurar clases de ancho
  if (fullWidth) {
    containerClasses += " w-full";
  } else {
    containerClasses += " mx-auto";
  }

  // Configurar clases de alineación
  if (center) {
    containerClasses += " flex justify-center";
  } else if (left) {
    containerClasses += " flex justify-start";
  } else if (right) {
    containerClasses += " flex justify-end";
  }

  // Configurar clases de dirección de elementos hijos
  if (direction === "row") {
    containerClasses += " flex-row";
  } else {
    containerClasses += " flex-col";
  }

  // Configurar clases de alineación vertical si es necesario
  if (center || left || right) {
    containerClasses += " items-center";
  }

  // Agregar clases personalizadas
  if (className) {
    containerClasses += " " + className;
  }

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
