// import logo from "../../public/image/LogoBlanco.png";
import Link from "next/link";
import ClockIcons from "../../components/Icons/Clock";
import ItemMenu from "../../views/ItemMenu";
import styles from "./style.module.css";
import { useRouter } from "next/router";

const Menu = ({ items }) => {
  const router = useRouter()
  console.log(router, "router")
  return (
    <nav
      className={`flex  justify-between items-center ${styles.menuContainer}`}
    >
      <div className={`px-5 ${styles.logoSection}`}>
        <img src="/images/LogoBlanco.png" alt="Logo" />
      </div>
      <section className={styles.wrapperMenu}>
        <div className={styles.hour}>
          <ClockIcons />
          <p className={styles.hourClockText}>Hasta las 4:00 PM</p>
        </div>
        <div className="">
            <Link href="/es"className="active">ES</Link>
            <span className={styles.span}>|</span>
            <Link href="/en"className="">EN</Link>
        </div>
      </section>

      <div className={styles.menuItems}>
        <ItemMenu items={items} />
      </div>
    </nav>
  );
};

export default Menu;
