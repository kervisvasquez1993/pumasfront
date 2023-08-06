import React from "react";

const BasicSection = ({
  title = {},
  classNameContent = {},
  children,
  styleWrapper = {},
  styleTitle = {},
  styleContent = {},
  width = "100%",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  classNameWrapper={}
}) => {
  const wrapperStyle = {
    width: width,
    display: "flex",
    flexDirection: "column",
    alignItems: alignItems,
    justifyContent: justifyContent,
    ...styleWrapper,
  };

  return (
    <section className={classNameWrapper} style={wrapperStyle}>
      {title && <h2 style={styleTitle}>{title}</h2>}
      {children && (
        <section style={styleContent} className={classNameContent}>
          {children}
        </section>
      )}
    </section>
  );
};

export default BasicSection;
