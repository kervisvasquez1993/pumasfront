import { useState } from "react";
import style from "./style.module.css";

const HeaderComponents = ({
  children,
  classNameText = "",
  classNameSection = "",
  alignment,
  src = "",
}) => {
  const [alignmentClasses, setAlignmentClasses] = useState("");

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
    backgroundImage: `url(${src})`,
    display: "flex",
    justifyContent: getJustifyContent(),
  };

  return (
    <section style={backgroundImageStyle}>
      <h2 className={`${classNameText} ${style.fontTitle}`}>
        {children}
      </h2>
    </section>
  );
};

export default HeaderComponents;
