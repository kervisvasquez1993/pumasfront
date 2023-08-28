import React, { createContext, useState, useEffect } from "react";

const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
    const [pagesState, setPageState] = useState([]);
    const [dynamicsComponent, setDynamicsComponent] = useState(null);

    const updateData = (data) => {

        setPageState(data);

    }
    useEffect(() => {
        if (pagesState?.slug == "centro-de-rescate") {
            setDynamicsComponent(pagesState.componentDynamics);
        }
        if (pagesState?.slug == "santuario") {
            setDynamicsComponent(pagesState.componentDynamics);
        }
    }, [pagesState])

       

    return (
        <PagesContext.Provider value={{ updateData, pagesState, dynamicsComponent }}>
            {children}
        </PagesContext.Provider>
    );
};

export default PagesContext;
