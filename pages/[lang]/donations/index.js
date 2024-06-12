import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Main from '../../../Layout/Main/Main'
import BasicSection from '../../../components/Section/Basic/BasicSection'
import {
  getAllDonations,
  getDonationInfo,
  getFooter,
  getModelGQ,
  getTypeDonations,
  getWhatsapp,
  langAll,
  getMenus
} from '../../../apis/ApiBackend'
import useDonations from '../../../hooks/useDonations'
import TwoColumnGrid from '../../../components/Section/Basic/TwoColumnGrid'
import StepByStepComponent from '../../../components/UI/StepByStepComponent'
import HeaderComponents from '../../../components/UI/HeaderComponents/HeaderComponets'
import SliderTwo from '../../../components/UI/Slider/SliderTwo'
import useScreenSize from '../../../hooks/useScreenSize'
import useMenu from '../../../hooks/useMenu'
import { obtenerFrase } from '../../../lang/traducciones'
import ReactMarkdown from 'react-markdown'
import FormDonations from '../../../components/Section/FormDonations'
import { data } from 'autoprefixer'
import FormDonationSpecies from '../../../components/Section/FormDonationSpecies'
import useModelo from '../../../hooks/useModelo'
import useStore from '../../../store/store-menu'
import Image from 'next/image'

const Donations = ({
  typeDonationSchemes,
  result,
  whatsapp,
  footer,
  donationInfo,
  modelsGQ,
  menus
}) => {
  const { screenSize } = useScreenSize()
  const [filter, setFilter] = useState(null)
  const [filterForSlug, setFilterForSlug] = useState(null)
  const { query } = useRouter()
  const { lang, params } = query
  const { loadedFooter, loadedWhatsapp, updateMenuLoader } = useMenu()
  const donations = obtenerFrase(query.lang, 'patrocinadores')
  useEffect(() => {
    loadedFooter(footer)
    loadedWhatsapp(whatsapp)
    updateMenuLoader(menus, lang)
  }, [lang])

  useEffect(() => {
    const models = filterBySlugModelo(modeloList, query.params)
    const resultForSlug = filterBySlug(result, query.params)
    setFilter(models)
    setFilterForSlug(resultForSlug)
  }, [query.params])


  const filterBySlug = (arr, slug) => {
    return arr?.filter((item) => {
      const modelos = item.modelos.data
      const tipoDonaciones = item.tipo_de_donacions.data
      return (
        modelos.some((modelo) => modelo.attributes.slug === slug) ||
        tipoDonaciones.some((tipo) => tipo.attributes.slug === slug)
      )
    })
  }


  const filterBySlugModelo = (arr, slug) => {
    return arr?.filter((item) => {
      return item?.slug == slug;
    });
  };

  const modeloList = modelsGQ?.data.map((item) => {
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


  // console.log(donationInfo[0]?.attributes.donaciones, "donationInfo")

  return (
    <Main titlePage={'Donación'}>


      <div className='container'>
        <h3 className='program-title fuenteTitulo colorPrimary sm:mx-10 sm:px-10 p-5'>
          {donationInfo[0]?.attributes?.title}
        </h3>
        <div className='grid-2 px-5'>
          <div className='about-program_text fuentesParrafo lg:px-10 sm:py-5 saltoLinea2'>
            <ReactMarkdown className='saltoLinea2'>
              {donationInfo[0]?.attributes?.description}
            </ReactMarkdown>
          </div>
          <Image width={500}  height={500} src={donationInfo[0]?.attributes?.img?.data?.attributes?.url} alt='Pumas' className='w-full' />
        </div>
        <TwoColumnGrid>
          <BasicSection
            classNameTitle={''}
            classNameWrapper={'setionStyleTwo'}
            title={''}
            classNameContent={'fuentesParrafo p-10'}
          >
            <p className='py-5'></p>
          </BasicSection>
        </TwoColumnGrid>
        <div>
          {/* <StepByStepComponent
            typeDonations={typeDonationSchemes}
            filtro={filter}
          /> */}
          {filter && filter.length > 0 ? (
            <FormDonationSpecies
              filterSpecie={filter}
              typeDonations={typeDonationSchemes}
              donaciones={donationInfo[0]?.attributes?.donaciones}
            />
          ) : (
            <FormDonations
              typeDonations={typeDonationSchemes}
              result={result}
              modelos={modelsGQ}
            />
          )}
        </div>
        <HeaderComponents
          src='/images/fondo1.png'
          classNameText={'py-5 colorVerde chelseaFont font-responsive'}
          alignment={`${screenSize <= 1200 ? 'center' : 'start'}`}
        >
          {donations}
        </HeaderComponents>
        <SliderTwo />
      </div>
    </Main>
  )
}

export default Donations

export async function getStaticProps(context) {
  const { params, query } = context
  const lang = params.lang
  const parametros = query?.params
  let isLoading = true
  const [
    donationsResponse,
    typeDonationsResponse,
    whatsappResponse,
    footerResponse,
    donationInfoResponse,
    modelsGQResponse,
    menusResponse,
  ] = await Promise.all([
    getAllDonations(lang),
    getTypeDonations(lang),
    getWhatsapp(lang),
    getFooter(lang),
    getDonationInfo(lang),
    getModelGQ(lang),
    getMenus(lang),
  ])

  const donations = donationsResponse.data.data
  const typeDonations = typeDonationsResponse.data.data
  const whatsapp = whatsappResponse?.data?.data[0]?.attributes
  const donationInfo = donationInfoResponse?.data?.data
  const footer = footerResponse?.data?.data[0]?.attributes?.footerInfo
  const modelsGQ = modelsGQResponse?.data?.modelos
  const menus = menusResponse.data.data
  const result = donations.map((element) => ({
    id: element.id,
    monto: element.attributes.monto,
    donacion: element.attributes.donacion,
    locale: element.attributes.locale,
    imgSrc: element.attributes.imgSrc,
    modelos: element.attributes.modelos,
    tipo_de_donacions: element.attributes.tipo_de_donacions,
    monto_semestral : element.attributes.monto_semestral,
    monto_anual : element?.attributes?.monto_anual,
    precios : element?.attributes?.precios,
    descripcion : element?.attributes?.descripcion
    // imagenes : element?.attributes?.imagenes
  }))
  // console.log(result, "result")
  const typeDonationSchemes = typeDonations.map((element) => {
    return {
      id: element.id,
      titulo: element.attributes.titulo,
      beneficio: element.attributes.Beneficio,
      descripcion: element.attributes.descripcion,
      slug: element.attributes.slug,
      imagen: element.attributes.imagen,
      locale: element.attributes.locale,
      donaciones: element.attributes?.donaciones,
    }
  })

  isLoading = false
  return {
    props: {
      typeDonationSchemes,
      result,
      isLoading,
      whatsapp,
      modelsGQ,
      footer,
      donationInfo,
      menus
    },
  }
}

export const getStaticPaths = async () => {
  const locales = await langAll()
  const languages = locales
  const lang = []
  for (const language of languages) {
    lang.push({ params: { lang: language.attributes.code } })
  }
  return {
    paths: lang,
    fallback: true,
  }
}
