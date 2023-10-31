import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getMenus, langAll } from '../apis/ApiBackend';
import Loader from '../components/UI/Loader';

const Home = ({ result, code }) => {
  const [firstTranslation, secondTranslation] = code;
  const router = useRouter();

  useEffect(() => {
    const inicio = result.find((element) => element.params.slug === 'inicio')?.params.slug;

    if (inicio) {
      const urlRedirect = `/${firstTranslation}/${inicio}`;
      router.push(urlRedirect);
    }
  }, []);

  return <Loader />;
};

export default Home;
export const getStaticProps = async () => {
    const lang = await langAll();
    
    const languages = lang.data;
    
    const result = [];
    const code = languages.map(element => {
        return element.code 
    })
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

    return { props: { result, code } };
};


