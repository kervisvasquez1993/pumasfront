import React, { createContext, useState } from "react";

const StatePage = createContext();

export const AlertProvider = ({ children }) => {
  return <StatePage.Provider value={{}}>{children}</StatePage.Provider>;
};

export default StatePage;
