import React from "react";
import style from "./style.module.css";
import Link from "next/link";

const ItemMenu = ({ items }) => {
    return (
        <>
            {items ? (
                <ul className={`${style.menuList} d-flex bg-red gap-4`}>
                    {items.map((item) => (
                        <li key={item.name}>
                            <Link className={style.menuItem} href={item.url}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>vacio</p>
            )}
        </>
    );
};

export default ItemMenu;
