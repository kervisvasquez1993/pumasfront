import { useState, useEffect, createContext } from 'react';

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
    // Inicializa screenSize con un valor predeterminado, por ejemplo, 0.
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        // Establece el tamaño inicial de la pantalla correctamente en el lado del cliente.
        setScreenSize(window.innerWidth);

        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Este efecto se ejecuta solo una vez, cuando el componente se monta.

    return <ScreenSizeContext.Provider value={{ screenSize }}>{children}</ScreenSizeContext.Provider>;
};

export default ScreenSizeContext;