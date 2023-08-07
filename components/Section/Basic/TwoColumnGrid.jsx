import React from "react";

const TwoColumnGrid = ({ children, backgroundImage }) => {
  const containerStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
  };
  // background-image: url("/images/mask-background.png");
  return (
    <section className="container-section py-10 my-10 mask-background" style={containerStyle}>
      <section className="grid-2">{children}</section>
    </section>
  );
};

export default TwoColumnGrid;
