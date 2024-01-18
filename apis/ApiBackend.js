import axios from "axios";

export const ApiBackend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_BASE,
});

export const getMenus = async (language) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
    params: {
      locale: language,
    },
  };
  const response = await ApiBackend("api/menus?sort=rang:asc", config);

  return response;
};
export const getPatrocinadores = (language) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
    params: {
      locale: language,
    },
  };
  return ApiBackend("api/patrocinadores?populate=*&sort=rang:asc", config);
};
export const getFooter = (language) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };
  return ApiBackend("api/footers?populate=*&locale=" + language, config);
};
export const getWhatsapp = (language) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };
  return ApiBackend("api/whatsapps?populate=*&locale=" + language, config);
};

export const getBlog = (language) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };
  return ApiBackend("api/blogs?populate=*&locale=" + language, config);
};

export const getAllModels = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };
  return ApiBackend("api/modelos?populate=*&locale=" + lang, config);
};

export const langAll = async () => {
  const query = `query {
    i18NLocales {
      data {
        id
        attributes {
          name
          code
        }
      }
    }
  }`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  try {
    const response = await ApiBackend.post("api/graphql", { query }, config);
    return response.data.data.i18NLocales.data;
  } catch (error) {
    console.error("Error fetching data models:", error);
    return null;
  }
};

export const getHorario = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };
  return ApiBackend("api/horarios", config);
};

export const getAllDonations = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  return ApiBackend(
    "api/donaciones?populate=*&sort=rang:asc&locale=" + lang,
    config
  );
};
export const getMaterialEducativo = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  return ApiBackend(
    "api/material-educativos?populate=*&sort=rang:asc&locale=" + lang,
    config
  );
};

export const getTypeDonations = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  return ApiBackend("api/tipo-de-donacions?populate=*&locale=" + lang, config);
};

export const getPageWithComponents = async (language, id) => {
  const query = `
    query GetPageWithComponents {
      page(id: "${id}", locale: "${language}") {
        data {
          id
          attributes {
            title
            slug
            DynamicComponent {
              ... on ComponentUiHeaderTitle {
                id
                Titulo
                color
              }
              ... on ComponentUiImagenes {
                id
                Content
                title
                colorTitle{
                  colorTitle
                }
                
                imagenes {
                  data {
                    attributes {
                      url
                      formats
                    }
                  }
                }
              }
              ...on ComponentUiBasicSection{
                title
                
                colorTitle{
                  colorTitle
                }
                content
                typeSection
                btn{
                  id
                  label
                  url
                  backgroundButton
                  fileLabel
                }
                background{
                  data{
                    id
                    attributes{
                      url
                      name
                      
                    }
                  }
                }
               imagenWithContentBasic{
                label
                content
                img{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
              
                
              }
              ...on ComponentUiRelacionMaterial{
                id
                material_educativos{
                  data{
                    attributes{
                      title
                      subTitle
                      description
                      imgFile{
                        data{
                          attributes{
                            url
                            name
                          }
                        }
                      }
                      file{
                        data{
                          attributes{
                            url
                            name
                          }
                        }
                      }
                      
                      
                    }
                  }
                }
              }
              ...on ComponentUiImagen{
                id
                img{
                  data{
                    attributes{
                      name
                      url
                    }
                  }
                }
                
    
                
              }
            }
          }
        }
      }
    }
  `;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  try {
    const response = await ApiBackend.post("api/graphql", { query }, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const matalEducativo = async (lang) => {
  const query = `query {
    materialEducativos(locale: "${lang}"){
      data{
        id
        attributes{
          title
          description
          subTitle
          file{
            data{
              attributes{
                url
                name
              }
            }
          }
          imgFile{
            data{
              attributes{
                url
                name
              }
            }
          }
        }
      }
    }
  }`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  try {
    const response = await ApiBackend.post("api/graphql", { query }, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching data models:", error);
    return null;
  }
};

export const getModelGQ = async (lang) => {
  const query = `query getmodels{
    modelos(locale : "${lang}" , pagination : {start : 1 , limit : 100}){
      data{
        id
        attributes{
          nombre
          nombreCientifico
          slug
          Componente
          ubicacionX
          ubicacionY
          especie
          nombreCientifico
          modelX
          modelY
          modelZ
          descripcion
          modelIntensity
          imagenes{
            data{
              attributes{
                url
              }
            }
          }
          srcModelo{
            data{
              attributes{
                url
              }
            }
          }
         
          
          
        }
      }
    }
  }`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  try {
    const response = await ApiBackend.post("api/graphql", { query }, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching data models:", error);
    return null;
  }
};

export const getPagesGQ = async (language) => {
  const query = `
  query GetPages{
    pages(locale : "${language}"){
      data{
        id
        attributes{
          title
          slug
          banner{
            ...on ComponentUiBanner{
              content
              tituloBanner
              backgroundImage{
                data{
                  attributes{
                    url
                  }
                }
              }
              btn{
                label
                id
                url
                backgroundButton

              }
            }
          }
          DynamicComponent{
            ... on ComponentUiHeaderTitle {
              id
              Titulo
              color
              nameComponent
            }
            ... on ComponentUiImagenes {
              id
              Content
              title
              typeSlider
              colorTitle{
                colorTitle
              }
              
              imagenes {
                data {
                  attributes {
                    url
                    formats
                  }
                }
              }
            }
            ...on ComponentUiBasicSection{
              title
              subTitle
              imgBasicContent{
                data{
                  attributes{
                    url
                  }
                }
              }
              colorTitle{
                colorTitle
              }
              content
              typeSection
              btn{
                id
                label
                url
                backgroundButton
                fileLabel{
                	data{
                    id
                    attributes{
                      url
                    }
                  }
              }
              }
              background{
                data{
                  id
                  attributes{
                    url
                    name
                    
                  }
                }
              }
             imagenWithContentBasic{
              label
              subtitle
              content
              url
              img{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
            }...on ComponentUiBlogSection{
              id
              blogs{
                data{
                  id
                  attributes{
                    TitleBlog
                    ContentBlog
                    slug
                    imgBlog{
                      data{
                        attributes{
                          url
                          previewUrl
                        }
                      }
                    }
                  }
                }
              }
            }
            ...on ComponentUiRelacionMaterial{
              id
              material_educativos{
                data{
                  attributes{
                    title
                    subTitle
                    description
                    imgFile{
                      data{
                        attributes{
                          url
                          name
                        }
                      }
                    }
                    file{
                      data{
                        attributes{
                          url
                          name
                        }
                      }
                    }
                    
                    
                  }
                }
              }
            }
            ...on ComponentUiImagen{
              id
              label
              url
              img{
                data{
                  attributes{
                    name
                    url
                  }
                }
              }
            }
           
          }
        }
      }
    }
  }
  `;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  try {
    const response = await ApiBackend.post("api/graphql", { query }, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
