import React, { createContext, useState, useEffect } from "react";

const DonationsContext = createContext();

export const DonationsProvider = ({ children }) => {
  const [donationAll, setDonationAll] = useState(null);
  const [paramsProvider, setParmsProvider] = useState("");
  const [filterArray, setFilterArray] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (donationAll && paramsProvider) {
      const filteredArray = filtrarPorSlug(donationAll, paramsProvider);
      setFilterArray(filteredArray);
    }
  }, [donationAll, paramsProvider]);

  const loadedDonations = (data) => {
    setDonationAll(data);
  };

  const loadedParams = (data) => {
    setParmsProvider(data);
  };

  // Función para filtrar y crear un nuevo arreglo
  function filtrarPorSlug(arr, slug) {
    return arr?.filter((item) => {
      const modelos = item.modelos.data; // Todos los elementos en el arreglo
      return modelos.some((modelo) => modelo.attributes.slug === slug);
    });
  }

  return (
    <DonationsContext.Provider
      value={{ loadedDonations, loadedParams, filterArray, loading }}
    >
      {children}
    </DonationsContext.Provider>
  );
};

export default DonationsContext;
