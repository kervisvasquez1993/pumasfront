import React from "react";
import style from "./style.module.css";
import Link from "next/link";

const ItemMenu = ({ items }) => {
  return (
    <>
      {items && (
        <ul className={`${style.menuList} flex my-10`}>
          {items.map((item, index) => {
            if (item.attributes.slug === "inicio") {
              return
            }
            if (item.attributes.nombre === "Apoyanos") {
              return (
                <Link href={`/${item.attributes.locale}/${item.attributes.slug}`} className={style.menuItem} key={item.id}>
                  <li
                    
                    className="backgroundPrimary text-center fontMenu btnPrimaryMenu font-bold py-2 rounded"
                  >

                    {item.attributes.nombre}

                  </li>
                </Link>
              );
            }
            return (
              <li
                key={item.id}
                className="px-2 py-2 text-center rounded fontMenu"
              >
                <Link
                  href={`/${item.attributes.locale}/${item.attributes.slug}`}
                  className={style.menuItem}
                >
                  {item.attributes.nombre}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ItemMenu;
