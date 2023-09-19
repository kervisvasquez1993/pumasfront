import React from "react";
import style from "./style.module.css";
import useScreenSize from "../../../hooks/useScreenSize";

const CardComponent = ({ imageUrl, title, description }) => {

    const { screenSize } = useScreenSize()
    console.log(screenSize, "screen")
    const cardStyle = {
        backgroundImage: `url(${imageUrl})`,
        margin : `${screenSize < 768 ? "0 auto" : ""}`
    };

    return (
        <div className={`${style.card} m-2 lg:m-10`} style={cardStyle}>
            <div className={style.cardContent}>
                <h2 className={style.cardTitle}>{title}</h2>
                <p className={style.cardDescription}>{description}</p>
            </div>
        </div>
    );
};

export default CardComponent;
