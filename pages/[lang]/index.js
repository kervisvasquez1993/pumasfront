import { useEffect, useState } from "react";
import Main from "../../Layout/Main/Main";
import BannerComponents from "../../components/UI/Banner/BannerComponents";
import GeneralComponents from "../../components/UI/GeneralComponet/GeneralComponents";
import HeaderComponets from "../../components/UI/HeaderComponents/HeaderComponets";
// import fondo from ""
const LangPage = ({ lang }) => {
    console.log(lang.code, "lang");

    return (
        <Main>
            {/* TODO:PASAR POR PROPS LOS PARAMETROS DEL BANNER */}
            <BannerComponents />

            <HeaderComponets
                src="/images/fondo1.png"
                classNameText={"py-5 colorPrimary"}
                alignment="start"
            >
                CENTRO DE RESCATE Y SANTUARIO LAS PUMAS
            </HeaderComponets>
            <GeneralComponents
                infoBTN={"Conoce más"}
                colorBTN={"backgroundPrimary"}
                reverseOrder={false}
                srcBackgroundColor="/images/fondo1.png"
                imageSrc="/images/venado.png"
                image2Src="/images/modelo3d.png"
                paragraphText={
                    "In the example below, we use the font Inter from next/font/google (you can use any font from Google or Local Fonts). Load your font with the variable option to define your CSS variable name and assign it to inter."
                }
            />
            <HeaderComponets
                src="/images/fondo1.png"
                classNameText={"py-5 colorSecondary"}
                alignment="end"
            >
                ¡CONOCE NUESTRO SANTUARIO VIRTUAL!
            </HeaderComponets>

            <GeneralComponents
                infoBTN={"Visita virtual"}
                colorBTN={"backgroundGris"}
                reverseOrder={true}
                srcBackgroundColor="/images/fondo1.png"
                imageSrc="/images/section2.png"
                paragraphText={
                    "In the example below, we use the font Inter from next/font/google (you can use any font from Google or Local Fonts). Load your font with the variable option to define your CSS variable name and assign it to inter."
                }
            />

            <GeneralComponents
                infoBTN={"Visita virtual"}
                colorBTN={"backgroundGris"}
                reverseOrder={false}
                srcBackgroundColor="/images/fondo1.png"
                imageSrc="/images/section2.png"
                paragraphText={
                    "In the example below, we use the font Inter from next/font/google (you can use any font from Google or Local Fonts). Load your font with the variable option to define your CSS variable name and assign it to inter."
                }
            />
        </Main>
    );
};

export default LangPage;
const getLangs = () => {
    const data = [
        {
            id: 1,
            name: "English (en)",
            code: "en",
            createdAt: "2023-06-20T15:13:26.235Z",
            updatedAt: "2023-06-20T15:13:26.235Z",
            isDefault: false,
        },
        {
            id: 2,
            name: "Spanish (es)",
            code: "es",
            createdAt: "2023-06-22T18:17:52.442Z",
            updatedAt: "2023-06-22T19:00:35.298Z",
            isDefault: true,
        },
    ];
    return data;
};
export const getStaticProps = async ({ params }) => {
    const paramId = params.lang;
    console.log(paramId, "paramId");
    const langs = getLangs();
    // const lang =
    const lang = langs.find((lang) => lang.code === paramId);
    if (!lang) return { notFound: true };
    return {
        props: { lang },
    };
};

export const getStaticPaths = async () => {
    const langs = getLangs();
    const code = langs.map((lang) => lang.code);
    const paths = code.map((path) => ({ params: { lang: path } }));
    // console.log(langs, "langs");
    return {
        paths,
        // fallback: "blocking ,
        fallback: true,
    };
};
