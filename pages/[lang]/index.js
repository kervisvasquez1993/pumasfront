import { useEffect, useState } from "react";
import Main from "../../Layout/Main/Main";
import BannerComponents from "../../components/UI/Banner/BannerComponents";
// import { api } from "../helpers/apiBackend";

const LangPage = ({ lang }) => {
    console.log(lang.code, "lang");

    return (
        <Main>
            <BannerComponents />
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
