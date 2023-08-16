import React from "react";

const TwoColumnGrid = ({ children, backgroundImage, minHeight="", display="", justifyContent="", alignItems="", width="" }) => {
  const containerStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    minHeight: minHeight ,
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    width : width
  };

  return (
    <section className="container-section py-10 my-10 mask-background" style={containerStyle}>
      <section className="grid-2">{children}</section>
    </section>
  );
};

export default TwoColumnGrid;
