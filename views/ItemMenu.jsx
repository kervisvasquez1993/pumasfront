import React from "react";

const ItemMenu = ({ items }) => {
    return (
        <>
            {items ? (
                <ul className={`${styles.menuList} flex gap-4`}>
                    {items.map((item) => (
                        <li>
                            <Link className={styles.menuItem} href={item.url}>
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
