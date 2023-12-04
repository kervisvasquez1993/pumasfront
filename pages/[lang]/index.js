import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getFooter, getMenus, langAll } from '../../apis/ApiBackend';
import Loader from '../../components/UI/Loader';

const Lang = ({ result, notFoundMessage }) => {
    console.log(result, "result")
    const router = useRouter();
    if (notFoundMessage) {
        return notFoundMessage
    }
    console.log(result?.code)
    let ruta;
    if (result?.attributes?.code === "es") {
        ruta = `/${result?.attributes?.code}/inicio`;
    }
    else if (result?.attributes.code === "en") {
        ruta = `/${result?.attributes?.code}/home`;
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
    const result = getLangAll.find(element => element.attributes.code === lang);

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
    const languages = lang;
    const results = await Promise.all(
        languages.map(async (language) => {
          console.log(language.attributes.code, "language");
          const menusResponse = await getMenus(language.attributes.code);
          const menus = menusResponse.data.data;
          
          return menus.map((element) => ({
            params: {
              lang: element.attributes.locale,
              slug: element.attributes.slug,
              name: element.attributes.nombre,
            },
          }));
        })
      );
      
      const result = results.flat();

    return {
        paths: result,
        fallback: true,
    };
};

