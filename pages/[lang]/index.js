import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFooter, getMenus, langAll } from "../../apis/ApiBackend";
import Loader from "../../components/UI/Loader";

const Lang = () => {
  const [result, setResult] = useState(null);
  const [notFoundMessage, setNotFoundMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchLangAndMenus = async () => {
      const getLangAll = await langAll();
      const result = getLangAll.find(
        (element) => element.attributes.code === router.query.lang
      );
      if (!result) {
        setNotFoundMessage(
          "No se encontró la ruta para el idioma proporcionado."
        );
      } else {
        setResult(result);
      }
    };

    fetchLangAndMenus();
  }, [router.query.lang]);

  if (notFoundMessage) {
    return notFoundMessage;
  }

  let ruta;
  if (result?.attributes?.code === "es") {
    ruta = `/${result?.attributes?.code}/inicio`;
  } else if (result?.attributes.code === "en") {
    ruta = `/${result?.attributes?.code}/home`;
  } else {
    return notFoundMessage;
  }

  useEffect(() => {
    if (ruta) {
      router.push(ruta);
    }
  }, [ruta]);

  return <Loader />;
};

export default Lang;
