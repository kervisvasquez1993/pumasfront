import useSWR, { SWRConfiguration } from "swr";
// Ajusta tu función fetcher para que acepte un cuerpo de petición y otros parámetros
const fetcher = (url, body, options) =>
  fetch(url, { body: JSON.stringify(body), ...options }).then((res) => res.json());

export const useFetch = (url, body, options, config = {}) => {
  const { data, error } = useSWR(
    [process.env.NEXT_PUBLIC_URL_BASE + url, body, options],
    fetcher,
    config
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};