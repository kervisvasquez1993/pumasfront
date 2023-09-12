import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Loader from "../Loader"
import ItemMenu from "../../../views/ItemMenu";


const Navbar = ({ items }) => {
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
    console.log(redirect)

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navbar menuContainer">
            <Link className={`px-5 nav_logo `} href={redirect}>
                <img src="/images/LogoBlanco.png" alt="Logo" />
            </Link>
            <div className={`nav_items ${isOpen && "open"}`}>
                {(items) ? <ItemMenu items={items.data} /> : <Loader />}
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar