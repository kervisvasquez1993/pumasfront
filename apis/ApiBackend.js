import axios from "axios";

export const ApiBackend = axios.create({
  baseURL: "http://localhost:1337",
});

export const getMenus = (language) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      locale: language,
    },
  };
  return ApiBackend("api/menus", config);
};

export const getAllModels = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return ApiBackend("api/modelos?populate=*&locale=" + lang, config);
};

export const langAll = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return ApiBackend("api/i18n/locales", config);
};

export const getAllDonations = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return ApiBackend("api/donaciones?populate=*&locale=" + lang, config);
};

export const getTypeDonations = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return ApiBackend("api/tipo-de-donacions?populate=*&locale" + lang, config);
};
