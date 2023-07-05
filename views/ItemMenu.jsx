import React from "react";
import style from "./style.module.css";
import Link from "next/link";

const ItemMenu = ({ items }) => {
  return (
    <>
      {items ? (
        <ul className={`${style.menuList} flex my-10  `}>
          {items.map((item) => {
            if (item.name === "Apoyanos") {
              return (
                <li
                  key={item.name}
                  href={item.url}
                  className=" backgroundPrimary  text-center fontMenu btnPrimaryMenu  font-bold py-2  rounded"
                >
                  <Link className={style.menuItem} href={item.url}>
                    {item.name}
                  </Link>
                </li>
              );
            }
            return (
              <li
                key={item.name}
                className="px-2 py-2  text-center rounded fontMenu "
              >
                <Link className={style.menuItem} href={item.url}>
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
