import create from 'zustand';
import { ApiBackend, langAll } from "../apis/ApiBackend";

const useStore = create(set => ({
  loading: true,
  menuData: null,
  footerData: [],
  langsInfo: [],
  whatsapp: {},
  setLoading: (value) => set({ loading: value }),
  setMenuData: (data, lang) => set({ menuData: { lang, data: data } }),
  setFooterData: (ruta) => set({ footerData: ruta }),
  setLangsInfo: (languages) => set({ langsInfo: languages }),
  setWhatsapp: (ruta) => set({ whatsapp: ruta }),
  getLangContext: async () => {
    const languages = await langAll();
    set({ langsInfo: languages });
  },
}));

export default useStore;