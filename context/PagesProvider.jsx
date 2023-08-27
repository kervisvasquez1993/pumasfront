import React, { createContext, useState } from "react";

const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
    const [pagesState, setPageState] = useState([]);
    const [selectedPage, setSelectedPage] = useState(null);

    const updateData = (data) => {
        console.log(data,"data")
        setPageState(data);
        console.log(pagesState, "loaded data")
    }

    const selectPageBySlug = (slug) => {
        
        console.log(pagesState, "selected")
        const selected = pagesState.find(page => page.attributes.slug === slug);
        setSelectedPage(selected);
      
    }

    console.log(pagesState, "updateData");
    console.log(selectedPage, "selectedPage");

    return (
        <PagesContext.Provider value={{ updateData, selectPageBySlug, selectedPage, pagesState }}>
            {children}
        </PagesContext.Provider>
    );
};

export default PagesContext;
