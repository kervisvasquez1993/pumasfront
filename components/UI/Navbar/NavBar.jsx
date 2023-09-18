import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "../Loader"
import ItemMenu from "../../../views/ItemMenu";
import useLocale from "../../../hooks/useLocales";
import { convertirHora } from "../../../helpers/apiBackend";


const Navbar = ({ items }) => {
    const { langAllContext, horario } = useLocale()
    const [apertura, setApertura] = useState(null)
    const [cierre, setCierre] = useState(null)
    const { query } = useRouter();
    const { lang } = query;
    let url = null;
    useEffect(() => {
        if (horario) {
            setApertura(horario[0].attributes.apertura);
            setCierre(horario[0].attributes.cierre);
        }
    }, [langAllContext, horario])

    const horaCierre = convertirHora(cierre);
    const horaApertura = convertirHora(apertura);

    // console.log(apertura, "apertura")
    if (lang === "es") {
        url = items?.data.find(e => e.attributes.slug == "inicio")
    }
    else if (lang === "en") {
        url = items?.data.find(e => e.attributes.slug == "home")
    }
    const redirect = `/${url?.attributes?.locale}/${url?.attributes?.slug}`
    const lenguaje = langAllContext?.map((element, index) => {
        return <Link key={index} href={`/${element.code}`}>{element.code}</Link>
    })
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navbar menuContainer">
            <div className="headerLogo">
                <Link className={`px-5 nav_logo `} href={redirect}>
                    <img src="/images/LogoBlanco.png" alt="Logo" />

                </Link>
                <div className="horario">
                    <span>Mañana</span> : <span>{horaApertura}</span>
                </div>
                <div className="idomas">
                    {lenguaje}
                </div>

            </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                {(items) ? <ItemMenu items={items.data} /> : <div className="center"><Loader /></div>}
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