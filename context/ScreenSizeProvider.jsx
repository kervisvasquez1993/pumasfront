import React, { createContext, useState, useEffect } from "react";

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenSize]);

    return <ScreenSizeContext.Provider value={{ screenSize }}>{children}</ScreenSizeContext.Provider>;
};

export default ScreenSizeContext;
