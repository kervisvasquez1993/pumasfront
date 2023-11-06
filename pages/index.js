import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMenus, langAll } from '../apis/ApiBackend';
import Loader from '../components/UI/Loader';

const Home = ({ result, code }) => {
  const [slug, setSlug] = useState("");
  const [lang, setLang] = useState("");
  const router = useRouter();

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    const languageNames = {
      "en": "en",
      "es": "es",
    };

    const detectedLanguage = userLang.split("-")[0];
    const languageName = languageNames[detectedLanguage] || "es";

    const slugByLanguage = {
      "en": "home",
      "es": "inicio",
    };

    const defaultSlug = slugByLanguage[languageName] || "inicio";

    setSlug(defaultSlug);
    setLang(languageName);

    const urlRedirect = `/${languageName}/${defaultSlug}`;
    console.log(urlRedirect, "Redirecting to");
    router.push(urlRedirect);

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


