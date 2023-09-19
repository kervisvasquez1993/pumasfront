// import logo from "../../public/image/LogoBlanco.png";
import Link from "next/link";
import ClockIcons from "../../components/Icons/Clock";
import ItemMenu from "../../views/ItemMenu";
import styles from "./style.module.css";
import usePages from '../../hooks/usePages';
import { useRouter } from "next/router";
import { useState } from "react";


const Menu = ({ items }) => {
  const { query } = useRouter();
  const { lang } = query;
  let url = null;
  if (lang === "es") {
    url = items?.data.find(e => e.attributes.slug == "inicio")
  }
  else if (lang === "en") {
    url = items?.data.find(e => e.attributes.slug == "home")
  }
  const redirect = `/${url?.attributes?.locale}/${url?.attributes?.slug}`
  return (
    <nav
      className={`flex  justify-between items-center ${styles.menuContainer}`}
    >
      <Link className={`px-5 ${styles.logoSection}`} href={redirect}>
        <img src="/images/LogoBlanco.png" alt="Logo" />
      </Link>
      <section className={styles.wrapperMenu}>
        <div className={styles.hour}>
          <ClockIcons />
          <p className={styles.hourClockText}>Hasta las 4:00 PM</p>
        </div>
        <div className="">
          <Link href="/es" className="color-white">ES</Link>
        </div>
      </section>

      <div className={styles.menuItems}>
        {items && <ItemMenu items={items.data} />}
      </div>
    </nav>
  );
};

export default Menu;
