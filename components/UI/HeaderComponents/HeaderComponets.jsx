import React from "react";
import style from "./style.module.css";

const HeaderComponents = ({
  children,
  classNameText = "",
  classNameSection = "",
  alignment,
  width = "100%",
}) => {
  const getJustifyContent = () => {
    if (alignment === "start") {
      return "flex-start";
    } else if (alignment === "center") {
      return "center";
    } else if (alignment === "end") {
      return "flex-end";
    }
    return "";
  };

  const backgroundImageStyle = {
    display: "flex",
    justifyContent: getJustifyContent(),
    width: width,
  };

  return (
    <section style={backgroundImageStyle} className={`${classNameSection}`}>
      <h2 className={`${classNameText} ${style.fontTitle}`}>{children}</h2>
    </section>
  );
};

export default HeaderComponents;
