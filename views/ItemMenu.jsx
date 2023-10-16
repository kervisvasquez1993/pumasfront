import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const ItemMenu = ({ items }) => {
  const { query } = useRouter();
  console.log(query)
  return (
    <>
      {items && (
        
        <ul className={`${style.menuList} flex my-10`}>
          {items.map((item, index) => {
            if (item.attributes.slug === "inicio" || item.attributes.slug === "home") {
              return
            }
            if (item.attributes.nombre === "Apoyanos" || item.attributes.slug === "support-us") {
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
            const itemSlug = item.attributes.slug;
            const isActive = query.slug === itemSlug;
            return (
              <li
              key={item.id}
              className={`px-2 py-2 text-center rounded fontMenu ${isActive ? 'active-menu' : 'desactivated-menu'}`}
            >
              <Link href={`/${item.attributes.locale}/${itemSlug}`} className={style.menuItem}>
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
