import React from "react";

const CanvasElement = ({ x, y, children }) => {
  const canvasElementStyle = {
    position: "absolute",
    left: x,
    top: y,
  };

  return <div style={canvasElementStyle}>{children}</div>;
};

export default CanvasElement;
