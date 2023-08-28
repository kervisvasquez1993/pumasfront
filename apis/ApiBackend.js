import axios from "axios";

export const ApiBackend = axios.create({
  baseURL: "http://localhost:1337",
});

export const getMenus = (language) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      locale: language,
    },
  };
  return ApiBackend("api/menus", config);
};

export const getAllModels = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return ApiBackend("api/modelos?populate=*&locale=" + lang, config);
};

export const langAll = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return ApiBackend("api/i18n/locales", config);
};

export const getAllDonations = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return ApiBackend("api/donaciones?populate=*&locale=" + lang, config);
};

export const getTypeDonations = (lang) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
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
          }
        }
      }
    }
  }
  `;

  const config = {
    headers: {
      "Content-Type": "application/json",
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