import axios from "axios";

export const ApiBackend = axios.create({
  baseURL: "https://strapi-pumas-ijwsa.ondigitalocean.app",
});

export const getMenus = (language) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 5cb67cace7cc00d222d3dfee88a4bf2d145b14d586b2be114fbea9ced2712b4e87d8c910c3a6995229a3db140cca57106a676ce4db525e550c81fdf5c08d191764cf62603fe154f4e85bee1e7480a5d9b1530978f61b7194a6fc7d912933bfa6e3f2454772a6429605e2616be2f38d5f29214baacab29df5c248613518724439`,

    },
    params: {
      locale: language,
    },
  };
  return ApiBackend("api/menus", config);
};

export const getBlog = (language) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 5cb67cace7cc00d222d3dfee88a4bf2d145b14d586b2be114fbea9ced2712b4e87d8c910c3a6995229a3db140cca57106a676ce4db525e550c81fdf5c08d191764cf62603fe154f4e85bee1e7480a5d9b1530978f61b7194a6fc7d912933bfa6e3f2454772a6429605e2616be2f38d5f29214baacab29df5c248613518724439`,
    }
  };
  return ApiBackend("api/blogs?populate=*&locale=" + language, config);
};

export const getAllModels = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 5cb67cace7cc00d222d3dfee88a4bf2d145b14d586b2be114fbea9ced2712b4e87d8c910c3a6995229a3db140cca57106a676ce4db525e550c81fdf5c08d191764cf62603fe154f4e85bee1e7480a5d9b1530978f61b7194a6fc7d912933bfa6e3f2454772a6429605e2616be2f38d5f29214baacab29df5c248613518724439`,
    },
  };
  return ApiBackend("api/modelos?populate=*&locale=" + lang, config);
};

export const langAll = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 5cb67cace7cc00d222d3dfee88a4bf2d145b14d586b2be114fbea9ced2712b4e87d8c910c3a6995229a3db140cca57106a676ce4db525e550c81fdf5c08d191764cf62603fe154f4e85bee1e7480a5d9b1530978f61b7194a6fc7d912933bfa6e3f2454772a6429605e2616be2f38d5f29214baacab29df5c248613518724439`,
    },
  };
  return ApiBackend("api/i18n/locales", config);
};

export const getAllDonations = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 5cb67cace7cc00d222d3dfee88a4bf2d145b14d586b2be114fbea9ced2712b4e87d8c910c3a6995229a3db140cca57106a676ce4db525e550c81fdf5c08d191764cf62603fe154f4e85bee1e7480a5d9b1530978f61b7194a6fc7d912933bfa6e3f2454772a6429605e2616be2f38d5f29214baacab29df5c248613518724439`,
    },
  };

  return ApiBackend("api/donaciones?populate=*&locale=" + lang, config);
};

export const getTypeDonations = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 5cb67cace7cc00d222d3dfee88a4bf2d145b14d586b2be114fbea9ced2712b4e87d8c910c3a6995229a3db140cca57106a676ce4db525e550c81fdf5c08d191764cf62603fe154f4e85bee1e7480a5d9b1530978f61b7194a6fc7d912933bfa6e3f2454772a6429605e2616be2f38d5f29214baacab29df5c248613518724439`,
    },
  };

  return ApiBackend("api/tipo-de-donacions?populate=*&locale" + lang, config);
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
      "Authorization": `Bearer 5cb67cace7cc00d222d3dfee88a4bf2d145b14d586b2be114fbea9ced2712b4e87d8c910c3a6995229a3db140cca57106a676ce4db525e550c81fdf5c08d191764cf62603fe154f4e85bee1e7480a5d9b1530978f61b7194a6fc7d912933bfa6e3f2454772a6429605e2616be2f38d5f29214baacab29df5c248613518724439`,
    },
  };

  try {
    const response = await ApiBackend.post("graphql", { query }, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
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
          model3D{
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
  }`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 5cb67cace7cc00d222d3dfee88a4bf2d145b14d586b2be114fbea9ced2712b4e87d8c910c3a6995229a3db140cca57106a676ce4db525e550c81fdf5c08d191764cf62603fe154f4e85bee1e7480a5d9b1530978f61b7194a6fc7d912933bfa6e3f2454772a6429605e2616be2f38d5f29214baacab29df5c248613518724439`,
    },
  };

  try {
    const response = await ApiBackend.post("graphql", { query }, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching data models:', error);
    return null;
  }
}

export const getPagesGQ = async (language) => {
  const query = `
  query GetPages{
    pages(locale : "${language}"){
      data{
        id
        attributes{
          title
          slug
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
            ... on ComponentUiTitlePrecio {
              precios{
               	data{
                  attributes{
                    title
                    value
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
      "Authorization": `Bearer 5cb67cace7cc00d222d3dfee88a4bf2d145b14d586b2be114fbea9ced2712b4e87d8c910c3a6995229a3db140cca57106a676ce4db525e550c81fdf5c08d191764cf62603fe154f4e85bee1e7480a5d9b1530978f61b7194a6fc7d912933bfa6e3f2454772a6429605e2616be2f38d5f29214baacab29df5c248613518724439`,
    },
  };

  try {
    const response = await ApiBackend.post("graphql", { query }, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};