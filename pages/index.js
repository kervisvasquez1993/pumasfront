import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMenus, langAll } from '../apis/ApiBackend';
import Loader from '../components/UI/Loader';

const Home = ({ result, code }) => {
  const [slug, setSlug] = useState("")
  const [lang, setLang] = useState("")
  
  const router = useRouter();
 
  useEffect(() => {
    const inicio = result.find((element) => element.params.slug === 'inicio')

    setLang(inicio.params.lang, "lang");
    setSlug(inicio.params.slug, "slugs");
    if (inicio) {
      const urlRedirect = `${lang}/${slug}`;
      console.log(urlRedirect, "urlRedirect")
      router.push(urlRedirect);
    }
  }, []);

  return <Loader />;
};

export default Home;
export const getStaticProps = async () => {
    const lang = await langAll();
    
    const languages = lang;
   
    const result = [];
    const code = languages.map(element => {
        return element.attributes.code 
    })
    for (const language of languages) {
        const menusResponse = await getMenus(language.attributes.code);
        const menus = menusResponse.data.data;
        console.log(menus, "menu");
        console.log(language.attributes.code, "code")
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

    return { props: { result, code } };
};


