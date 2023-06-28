import React from "react";
import style from "./style.module.css";
import Link from "next/link";

const ItemMenu = ({ items }) => {
    return (
        <>
            {items ? (
                <ul className={`${style.menuList} flex my-10 mx-10 `}>
                    {items.map((item) => {
                        if (item.name === "Apoyanos") {
                            return (
                                <li
                                    key={item.name}
                                    className="mr-4 backgroundPrimary text-white font-bold py-2 px-10 rounded"
                                >
                                    <Link
                                        className={style.menuItem}
                                        href={item.url}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        }
                        return (
                            <li
                                key={item.name}
                                className="mr-4 py-2 px-4 rounded"
                            >
                                <Link
                                    className={style.menuItem}
                                    href={item.url}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>vacio</p>
            )}
        </>
    );
};

export default ItemMenu;
