import React, { createContext, useEffect, useState } from "react";
import { ApiBackend } from "../apis/ApiBackend";

const ModeloContext = createContext();

export const ModeloProvider = ({ children }) => {
  const [modelInfo, setModelInfo] = useState(null);
  const hearlessChangInfo = (data) => {
    setModelInfo(data);
  };

  const modeloList = modelInfo?.es?.data.map((item) => {
    const srcModeloUrl =
      "http://localhost:1337" +
        item.attributes.srcModelo?.data[0]?.attributes?.url || null;

    const imagenes = item.attributes?.imagenes?.data?.map((imagen) => {
      return {
        id: imagen.id,
        url: "http://localhost:1337" + imagen.attributes.url,
      };
    });

    return {
      nombre: item.attributes.nombre,
      ubicacionX: item.attributes.ubicacionX,
      ubicacionY: item.attributes.ubicacionY,
      descripcion: item.attributes.descripcion,
      especie : item.attributes.especie,
      nombreCientifico : item.attributes.nombreCientifico,
      srcModelo: srcModeloUrl,
      imagenes: imagenes,
    };
  });

  return (
    <ModeloContext.Provider
      value={{ hearlessChangInfo, modelInfo, modeloList }}
    >
      {children}
    </ModeloContext.Provider>
  );
};

export default ModeloContext;
