import React, { useEffect } from 'react'
import { getMenus, getPagesGQ, langAll } from '../../apis/ApiBackend';
import usePages from '../../hooks/usePages';
import { useRouter } from 'next/router';

const Lang = ({ menu, pages }) => {
    const router = useRouter();
    const { lang } = router.query;

    const inicio = menu.find(e => e.slug === "inicio")?.slug;
    useEffect(() => {
            router.push(`/${lang}/${inicio}`);
            updateData(pages);
        
    }, [lang, isLangPage]); 

    const { updateData } = usePages();

    return (
        <div>Lang</div>
    );
};





export const getStaticProps = async ({ params }) => {
    const { lang } = params;

    const [menusResponse, pagesResponse] = await Promise.all([
        getMenus(lang),
        getPagesGQ(lang)
    ]);
    const menus = menusResponse.data.data;
    const pages = pagesResponse.data.pages

    const menu = menus.map((element) => ({
        lang: element.attributes.locale,
        slug: element.attributes.slug,
        name: element.attributes.nombre,
        contentType: "component",
    }));
    return {
        props: { menu, lang, pages },
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



export default Lang