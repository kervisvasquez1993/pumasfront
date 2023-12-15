import useSWR, { SWRConfiguration } from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useFetch = (url, config = {}) => {
  const { data, error } = useSWR(
    process.env.NEXT_PUBLIC_URL_BASE + url,
    fetcher,
    config
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
