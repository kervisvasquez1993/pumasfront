import React from "react";
import CanvasElement from "./CanvasElement"; 

const MapWithBackground = ({ backgroundImage, children }) => {
  const mapStyle = {
    position: "relative",
    maxWidth: "100vw",
    height: "95vh",
    overflowX: "auto",
    overflowY: "auto"
  };

  const backgroundContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "2800px",
    height: "2000px",
  };

  const backgroundStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top left", 
    display: "flex",
    flexWrap: "nowrap", 
    overflowX: "auto",
  };

  const scrollableContentStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 2
  };

  return (
    <section className="headerSectionMap" style={mapStyle}>
      <div style={backgroundContainerStyle}>
        <div style={backgroundStyle} className="mapa"></div>
      </div>
      <div style={scrollableContentStyle}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const { x, y } = child.props; 
            return (
              <CanvasElement key={child.key} x={x} y={y} className="test">
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
