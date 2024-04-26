import useSWR from "swr";

const fetcher = (url, token) => {
  const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
  return fetch(url, { headers }).then((res) => res.json());
};

export const useFetch = (url, config = {}, token) => {
  const { data, error, mutate } = useSWR(
    process.env.NEXT_PUBLIC_URL_BASE + url,
    (url) => fetcher(url, token),
    config
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};