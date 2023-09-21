import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import ButtonView from "../../../views/ButtonView";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
const BannerComponents = ({ data }) => {
  const router = useRouter();
  const { lang } = router.query
  const { content, btn, backgroundImage, tituloBanner } = data[0]
  const backgroundImageUrl = "/images/pumas.jpg";
  const buttons = btn?.map((element, index) => {
    return (<ButtonView className={`${element?.backgroundButton}  manropeFont`} link={lang + "/" + element?.url} key={index}>
      {element?.label}
    </ButtonView>)
  })

  return (
    <div
      className={`${styles.hero} bg-cover bg-center text-white flex items-center justify-center`}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className={`${styles.container} px-10 sm:w-60vw md:w-45vw lg:w-45vw `}>
        <h1 className={`${styles.fontTitleBannerTitle} manropeFont`}>
          {tituloBanner}
        </h1>
        <ReactMarkdown className={`${styles.fontTitleSubTitle} manropeFont`}>{content}</ReactMarkdown>
        <section className={`mt-10 ${styles.wrapperButton}`}>
          {buttons}
        </section>
      </div>
      <img className="imagen-superpuesta-banner" src={"/images/mask.png"} alt={"maskSrc"} />
    </div>
  );
};

export default BannerComponents;
