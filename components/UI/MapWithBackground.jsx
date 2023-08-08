import React from "react";
import CanvasElement from "./CanvasElement"; // Asegúrate de importar el componente CanvasElement desde la ruta correcta

const MapWithBackground = ({ backgroundImage, children }) => {
  const mapStyle = {
    position: "relative",
    overflow: "hidden", // Para recortar el contenido que se sale de los límites
    maxWidth: "100vw", // Tamaño máximo de pantalla
    margin: "0 auto", // Centrar el contenido si la pantalla es más ancha que maxWidth
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
    transformOrigin: "top left", // Importante para mantener la escala
    transform: "scale(1)", // Escala inicial de 1
  };

  const scrollableContentStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflowX: "auto", // Habilitar el desplazamiento horizontal en pantallas pequeñas
    whiteSpace: "nowrap", // Mantener los elementos en una sola línea
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
