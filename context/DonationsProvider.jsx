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

  function filtrarPorSlug(arr, slug) {
    return arr?.filter((item) => {
      const modelos = item.modelos.data;
      const tipoDonaciones = item.tipo_de_donacions.data;
  
      return (
        modelos.some((modelo) => modelo.attributes.slug === slug) ||
        tipoDonaciones.some((tipo) => tipo.attributes.slug === slug)
      );
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
