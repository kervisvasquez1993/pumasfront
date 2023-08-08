import React, { createContext, useEffect, useState } from "react";
import { ApiBackend } from "../apis/ApiBackend";

const ModeloContext = createContext();

export const ModeloProvider = ({ children }) => {
  const [modelInfo, setModelInfo] = useState(null);
  const hearlessChangInfo = (data) => {
    setModelInfo(data);
  };

  const modeloList = modelInfo?.es?.data.map((item) => ({
    nombre: item.attributes.nombre,
    ubicacionX: item.attributes.ubicacionX,
    ubicacionY: item.attributes.ubicacionY,
    srcModelo: item.attributes.srcModelo
      ? "http://localhost:1337" +
        item.attributes.srcModelo.data[0]?.attributes?.url
      : null,
  }));

  return (
    <ModeloContext.Provider
      value={{ hearlessChangInfo, modelInfo, modeloList }}
    >
      {children}
    </ModeloContext.Provider>
  );
};

export default ModeloContext;
