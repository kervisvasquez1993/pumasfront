import React, { createContext, useEffect, useState } from 'react'
import { ApiBackend } from '../apis/ApiBackend'

const ModeloContext = createContext()

export const ModeloProvider = ({ children }) => {
  const [modelInfo, setModelInfo] = useState(null)
  const hearlessChangInfo = (data) => {
    setModelInfo(data)
  }
  const modeloList = modelInfo?.data.map((item) => {
    const srcModeloUrl =
      item?.attributes?.srcModelo?.data[0]?.attributes?.url || null
    const models3d = item.attributes.model3D?.data?.attributes?.url || null

    const imagenes = item.attributes?.imagenes?.data?.map((imagen) => {
      return {
        id: imagen.id,
        url: imagen.attributes.url,
      }
    })

    return {
      id: item.id,
      nombre: item.attributes.nombre,
      ubicacionX: item.attributes.ubicacionX,
      ubicacionY: item.attributes.ubicacionY,
      descripcion: item.attributes.descripcion,
      slug: item.attributes.slug,
      especie: item.attributes.especie,
      nombreCientifico: item.attributes.nombreCientifico,
      srcModelo: srcModeloUrl,
      imagenes: imagenes,
      modelo3d: models3d,
      componente: item.attributes.Componente,
      modelX: item.attributes.modelX,
      modelY: item.attributes.modelY,
      modelZ: item.attributes.modelZ,
      modelIntensity: item.attributes.modelIntensity,
    }
  })

  return (
    <ModeloContext.Provider
      value={{ hearlessChangInfo, modelInfo, modeloList }}
    >
      {children}
    </ModeloContext.Provider>
  )
}

export default ModeloContext
