import React from "react";

const BasicSection = ({
  title = {},
  classNameContent = {},
  children,
  styleWrapper = {},
  styleTitle = {},
  styleContent = {},
  widthContent = "100%",
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
  const contentStyle = {
    ...styleContent,
    width: widthContent, 
  };


  return (
    <section className={classNameWrapper} style={wrapperStyle}>
      {title && <h2 style={styleTitle}>{title}</h2>}
      {children && (
        <section style={contentStyle} className={classNameContent}>
          {children}
        </section>
      )}
    </section>
  );
};

export default BasicSection;
