import React from "react";
import style from "./style.module.css";

const CardComponent = ({ imageUrl, title, description }) => {
    const cardStyle = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        <div className={`${style.card}  m-10`} style={cardStyle}>
            <div className={style.cardContent}>
                <h2 className={style.cardTitle}>{title}</h2>
                <p className={style.cardDescription}>{description}</p>
            </div>
        </div>
    );
};

export default CardComponent;
