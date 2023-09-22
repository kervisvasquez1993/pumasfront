import React from "react";

const CanvasElement = ({ x, y, children,className, width }) => {
  const canvasElementStyle = {
    position: "absolute",
    left: x+"px",
    top: y+"px",
    width : width,
    cursor: "pointer"
  };

  return <div style={canvasElementStyle} className={className}>{children}</div>;
};

export default CanvasElement;
