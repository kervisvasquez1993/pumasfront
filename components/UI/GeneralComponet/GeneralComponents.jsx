import React from "react";
import style from "./styles.module.css";
import ImageCardComponet from "../ImageCardComponent/ImageCardComponet";
import ButtonView from "../../../views/ButtonView";

const GeneralComponents = ({
  children,
  imageSrc = "",
  image2Src = "",
  reverseOrder,
  srcBackgroundColor = "",
  colorBTN = "",
  infoBTN = "",
}) => {
  const containerClasses = reverseOrder
    ? `${style.container} ${style.reverse}`
    : style.container;

  const backgroundImageStyle = {
    backgroundImage: `url(${srcBackgroundColor})`,
  };

  return (
    <section className={`${containerClasses} test`} style={backgroundImageStyle} >
      <section className={`${style.imageContainer} ${style.children} `}  >
        {imageSrc && (
          <ImageCardComponet
            image1Src={imageSrc}
            image2Src={image2Src}
            title={"Texto de relleno"}
            subtitle={"sub title de rellono"}
          />
        )}
      </section>

      <section
        className={`${style.textContainer} ${style.children}`}
       
      >
        {/* <p className={style.paragraph}>{paragraphText}</p>

        <ButtonView className={`${colorBTN} manropeFont mt-10`} link={""}>
          {infoBTN}
        </ButtonView> */}
        {children}
      </section>
    </section>
  );
};

export default GeneralComponents;
