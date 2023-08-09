import React from "react";
import CanvasElement from "./CanvasElement"; // Asegúrate de importar el componente CanvasElement desde la ruta correcta

const MapWithBackground = ({ backgroundImage, children }) => {
  const mapStyle = {
    position: "relative",
    maxWidth: "100vw", // Tamaño máximo de pantalla
  };

  const backgroundContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  const backgroundStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top left", // Cambiamos a la esquina superior izquierda
    display: "flex", // Usar flex para contener los elementos hijos
    flexWrap: "nowrap", // Mantener los elementos en una sola línea
    overflowX: "auto", // Habilitar el desplazamiento horizontal en pantallas pequeñas
  };

  const scrollableContentStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  };

  return (
    <section className="headerSectionMap" style={mapStyle}>
      <div style={backgroundContainerStyle}>
        <div style={backgroundStyle}></div>
      </div>
      <div style={scrollableContentStyle}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const { x, y } = child.props; // Coordenadas personalizadas de cada hijo
            return (
              <CanvasElement key={child.key} x={x} y={y}>
                {child}
              </CanvasElement>
            );
          }
          return child;
        })}
      </div>
    </section>
  );
};

export default MapWithBackground;