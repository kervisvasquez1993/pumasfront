import React from "react";
import style from "./style.module.css";
const ImageCardComponet = ({ image1Src, image2Src = "", title, subtitle }) => {
    return (
        <section className={style.wrapper}>
            <img src={image1Src} alt="Imagen 1" className={style.mainImg} />
            {image2Src && (
                <section className={style.sectionImg}>
                    <img
                        src={image2Src}
                        alt="Imagen 2"
                        className={style.model3d}
                    />
                    <div className={style.font}>
                        <h5>{title}</h5>
                        <p>{subtitle}</p>
                    </div>
                </section>
            )}
        </section>
    );
};

export default ImageCardComponet;
