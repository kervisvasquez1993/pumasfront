import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getMenus, langAll } from '../../apis/ApiBackend';
import Loader from '../../components/UI/Loader';

const Lang = ({ result, notFoundMessage }) => {
    const router = useRouter();
    if (notFoundMessage) {
        return notFoundMessage
    }
    console.log(result?.code)
    let ruta;
    if (result?.code === "es") {
        ruta = `/${result?.code}/inicio`;
    }
    else if (result?.code === "en") {
        ruta = `/${result?.code}/home`;
    }
    else {

        return notFoundMessage
    }




    useEffect(() => {

        router.push(ruta);

    }, [result]);

    return <Loader />;
};

export default Lang;
export const getStaticProps = async ({ params }) => {
    const { lang } = params;
    const getLangAll = await langAll();
    const result = getLangAll.data.find(element => element.code === lang);

    if (!result) {
        return {
            props: {
                notFoundMessage: "No se encontró la ruta para el idioma proporcionado.",
            },
        };
    }

    return {
        props: { result },
    };
};

export const getStaticPaths = async () => {
    const lang = await langAll();
    const languages = lang.data;
    const result = [];
    for (const language of languages) {
        const menusResponse = await getMenus(language.code);
        const menus = menusResponse.data.data;
        menus.forEach((element) => {
            result.push({
                params: {
                    lang: element.attributes.locale,
                    slug: element.attributes.slug,
                    name: element.attributes.nombre,
                },
            });
        });
    }

    return {
        paths: result,
        fallback: true,
    };
};

