import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "../Loader"
import ItemMenu from "../../../views/ItemMenu";
import useLocale from "../../../hooks/useLocales";
import { convertirHora } from "../../../helpers/apiBackend";
import useMenu from "../../../hooks/useMenu";


const Navbar = ({ items }) => {
    // console.log(items, "items")
    const { langAllContext, horario } = useLocale()
    const { menuData, loading } = useMenu();
    const [apertura, setApertura] = useState(null)
    const [cierre, setCierre] = useState(null)
    const { query } = useRouter();
    const { lang } = query;
    const langActual = menuData?.find(element => element.lang === lang)
    let url = null
    let redirectSlug = null
    if (query.slug) {
        redirectSlug = langActual?.data.find(element => element.attributes.slug == query.slug)
    }
    console.log(redirectSlug)
    useEffect(() => {
        if (horario) {
            setApertura(horario[0].attributes.apertura);
            setCierre(horario[0].attributes.cierre);
        }
    }, [langAllContext, horario])
    const horaCierre = convertirHora(cierre);
    const horaApertura = convertirHora(apertura);
    if (lang === "es") {
        url = items?.data.find(e => e.attributes.slug == "inicio")
    }
    else if (lang === "en") {
        url = items?.data.find(e => e.attributes.slug == "home")
    }
    const redirect = `/${url?.attributes?.locale}/${url?.attributes?.slug}`



    const lenguaje = langAllContext?.map((element, index, array) => {
        const isLast = index === array.length - 1;
        const isActive = element.code === lang; // Verifica si el idioma es el actual
        const linkClassName = `codeLang ${isActive ? 'active-menu' : 'desactivated-menu'}`;

        const handleLanguageChange = () => {
            if (redirectSlug && redirectSlug.attributes.slugTranslate) {
                const translatedSlug = redirectSlug.attributes.slugTranslate;

                if (element.code !== lang) {
                    // Utiliza Link para realizar la redirección
                    return (
                        <Link href={`/${element.code}/${translatedSlug}`} key={index} className={linkClassName}>

                            {element.code}

                        </Link>
                    );
                }
            }

            // Si no hay redirección, simplemente muestra el enlace
            return (
                <Link key={index} href={'#'} className={linkClassName}>
                    {element.code}
                </Link>
            );
        };


        return (
            <React.Fragment key={index}>
                {handleLanguageChange()}
                {!isLast && <span className="separador px-1">|</span>}
            </React.Fragment>
        );
    });
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