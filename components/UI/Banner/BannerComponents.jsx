import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import ButtonView from "../../../views/ButtonView";
const BannerComponents = () => {
  const backgroundImageUrl = "/images/pumas.jpg";

  return (
    <div
      className={`${styles.hero} bg-cover bg-center text-white flex items-center justify-center`}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className={`${styles.container} sm:w-60vw md:w-45vw lg:w-45vw`}>
        <h1 className={`${styles.fontTitleBannerTitle} manropeFont`}>
          Rescata, rehabilita y libera
        </h1>
        <p className={`${styles.fontTitleSubTitle} manropeFont`}>
          Ganarantiza la calidad de vida de la fauna silvestre de Costa Rica,
        </p>
        <p className={`${styles.fontTitleSubTitle} manropeFont`}>
          motivado el respeto y aprecio hacia estos animales.
        </p>
        <section className={`mt-10 ${styles.wrapperButton}`}>
          <ButtonView className={" backgroundSecondary manropeFont"} link={""}>
            Visitanos
          </ButtonView>
          <ButtonView className={"backgroundPrimary  manropeFont"}>
            Apoyanos
          </ButtonView>
        </section>
      </div>
      {/* <div style={{ backgroundImage: `url("/images/mask.png")` }}></div> */}
      <img className="imagen-superpuesta-banner" src={"/images/mask.png"} alt={"maskSrc"} />
    </div>
  );
};

export default BannerComponents;
