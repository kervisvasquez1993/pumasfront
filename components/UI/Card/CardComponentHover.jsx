import React, { useState } from 'react'
import useScreenSize from '../../../hooks/useScreenSize';
import style from "./style.module.css";
import Link from 'next/link';

const CardComponentHover = ({ imageUrl, title, description, url }) => {
    const { screenSize } = useScreenSize()
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {

        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const cardStyle = {
        backgroundImage: `url(${imageUrl})`,
        margin: `${screenSize < 768 ? "0 auto" : ""}`
    };

    return (
        <div className={`${style.card} materials__imagen m-2 lg:m-10 downloads `} style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className={style.cardContent}>
                <h2 className={style.cardTitle}>{title}</h2>
                <p className={style.cardDescription}>{description}</p>
            </div>
            {isHovered && (
                <Link  className="download-button" href={url} >Ver Mas</Link>
            )}
        </div>
    );
};
export default CardComponentHover