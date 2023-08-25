import React from "react";

const CanvasElement = ({ x, y, children,className }) => {
  const canvasElementStyle = {
    position: "absolute",
    left: x,
    top: y,
    width : "100px",
    cursor: "pointer"
  };

  return <div style={canvasElementStyle} className={className}>{children}</div>;
};

export default CanvasElement;
