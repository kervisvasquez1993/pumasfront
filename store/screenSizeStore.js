// store.js
import { create } from 'zustand';
import { useEffect } from 'react';

const useScreenSizeStore = create((set) => ({
  screenSize: typeof window !== 'undefined' ? window.innerWidth : 0, // Usa un valor predeterminado si `window` no está definido
  setScreenSize: (size) => set({ screenSize: size }),
}));

// Inicializa el listener solo si `window` está definido
if (typeof window !== 'undefined') {
  const initResizeListener = () => {
    const handleResize = () => {
      useScreenSizeStore.getState().setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };

  // Llama a initResizeListener para inicializar el listener
  initResizeListener();
}

export default useScreenSizeStore;