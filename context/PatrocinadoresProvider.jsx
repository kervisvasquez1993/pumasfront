
import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getPatrocinadores } from "../apis/ApiBackend";

const PatrocinadoresContext = createContext();

export const PatrocindadoresProvider = ({ children }) => {
    const [patrocinadores, setPatrocinadores] = useState([])
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { lang } = router

    useEffect(() => {
        (async () => {
            try {
                // Obtener datos de la API
                const patrocinadoresData = await getPatrocinadores(lang);

                // Actualizar el estado con los datos obtenidos de la API
                setPatrocinadores(patrocinadoresData?.data?.data);

                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        })();
    }, []);

    return <PatrocinadoresContext.Provider value={{ patrocinadores, loading }}>{children}</PatrocinadoresContext.Provider>;
};

export default PatrocinadoresContext;
