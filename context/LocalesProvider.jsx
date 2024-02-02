import React, { createContext, useState, useEffect } from "react";
import { langAll, getHorario } from "../apis/ApiBackend";

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {

    const [langAllContext, setLangAllContext] = useState(null)
    const [horario, setHorario] = useState(null)
    const getLang = async () => {
        const results = await langAll()
        return results
    };

    const callHorario = async () => {
        const results = await getHorario()
        return results
    };

    useEffect(() => {
        (async () => {
            try {
                const [langData, horarioData] = await Promise.all([getLang(), callHorario()]);
                setLangAllContext(langData);
                setHorario(horarioData.data?.data);
            } catch (error) {
                // Manejar errores si es necesario
                console.error("Error al obtener datos:", error);
            }
        })();
    }, []);
    //console.log(langAllContext, "lang")
    return (
        <LocaleContext.Provider value={{ langAllContext, horario }}>
            {children}
        </LocaleContext.Provider>
    );
};

export default LocaleContext;
