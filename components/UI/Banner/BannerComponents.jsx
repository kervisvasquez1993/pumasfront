import React from "react";
import styles from "./style.module.css";
const BannerComponents = () => {
    const backgroundImageUrl = "/images/pumas.png";

    return (
        <div
            className={`${styles.hero} bg-cover bg-center bg-blue-500 text-white flex items-center justify-center`}
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
            <div
                className={`${styles.container} sm:w-60vw md:w-45vw lg:w-45vw`}
            >
                <h1 className={`${styles.fontTitleBannerTitle} manropeFont`}>
                    Rescata, rehabilita y libera
                </h1>
                <p className={`${styles.fontTitleSubTitle} manropeFont`}>
                    Ganarantiza la calidad de vida de la fauna silvestre de
                    Costa Rica,
                </p>
                <p className={`${styles.fontTitleSubTitle} manropeFont`}>
                    motivado el respeto y aprecio hacia estos animales.
                </p>
            </div>
        </div>
    );
};

export default BannerComponents;
