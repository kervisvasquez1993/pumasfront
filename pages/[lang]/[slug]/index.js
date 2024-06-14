import React, { useEffect } from 'react'
import HomePage from '../../../components/Pages/HomePage'
import { useRouter } from 'next/router'
import NosotrosPage from '../../../components/Pages/NosotrosPage'
import {
  getAllModels,
  getBlog,
  getMenus,
  getModelGQ,
  getPageWithComponents,
  getPagesGQ,
  langAll,
  getFooter,
  getMaterialEducativo,
  getWhatsapp,
} from '../../../apis/ApiBackend'
import SantuarioPage from '../../../components/Pages/SantuarioPage'
import CentroDeRescate from '../../../components/Pages/CentroDeRescate'
import BlogPage from '../../../components/Pages/BlogPage'
import ProgramaPage from '../../../components/Pages/ProgramaPage'
import ApoyanosPage from '../../../components/Pages/ApoyanosPage'
import useModelo from '../../../hooks/useModelo'
import usePages from '../../../hooks/usePages'
import Loader from '../../../components/UI/Loader'
import useMenu from '../../../hooks/useMenu'
import useScreenSizeStore from '../../../store/screenSizeStore'

const componentMap = {
  inicio: HomePage,
  home: HomePage,
  nosotros: NosotrosPage,
  history: NosotrosPage,
  santuario: SantuarioPage,
  sanctuary: SantuarioPage,
  'centro-de-rescate': CentroDeRescate,
  'rescue-center': CentroDeRescate,
  programas: ProgramaPage,
  programs: ProgramaPage,
  apoyanos: ApoyanosPage,
  'support-us': ApoyanosPage,
}

const Page = ({
  page,
  blogsPage,
  footer,
  materialEductivoSort,
  whatsapp,
  menus,
}) => {
  const screenSize = useScreenSizeStore((state) => state.screenSize);
  const router = useRouter()
  const { hearlessChangInfo } = useModelo()
  const { updateData } = usePages()
  const { lang } = router.query
  const { loadedFooter, loadedWhatsapp, updateMenuLoader } = useMenu()
  useEffect(() => {
    loadedFooter(footer)
    loadedWhatsapp(whatsapp)
    updateMenuLoader(menus, lang)
  }, [lang])
  useEffect(() => {
    updateData(page)
  }, [page])
  if (router.isFallback) {
    return <Loader />
  }

  if (!page) {
    return <div>Página no encontrada</div>
  }

  const renderContent = () => {
    const Component = componentMap[page.slug]
    if (Component) {
      return <Component data={page} material={materialEductivoSort} />
    } else if (page.contentType === 'text') {
      return <p>{page.name}</p>
    } else {
      return null
    }
  }

  return <div>{renderContent()}</div>
}

const transformMaterialEducativo = (materialEducativodataResponse) => {
  return materialEducativodataResponse.map((item) => {
    const { title, description, subTitle } = item.attributes
    const imgFile = {
      name: item?.attributes?.imgFile?.data?.attributes?.name,
      url: item?.attributes?.imgFile?.data?.attributes?.url,
    }
    const file = {
      name: item?.attributes?.file?.data?.attributes?.name || '',
      url: item?.attributes?.file?.data?.attributes?.url || '',
    }

    return {
      id: item.id,
      title,
      description,
      subTitle,
      imgFile,
      file,
      urlExterna: item?.attributes?.urlExterna || '',
    }
  })
}

const transformPages = (dataPages, lang) => {
  return dataPages.map((page) => {
    return {
      id: page.id,
      title: page.attributes.title,
      slug: page.attributes.slug,
      componentDynamics: page?.attributes?.DynamicComponent,
      locales: lang,
      banner: page?.attributes?.banner,
      contentType: 'component',
      meta : page?.attributes?.meta
    }
  })
}

export const getStaticProps = async ({ params }) => {
  try {
    const { lang, slug } = params
    const [
      pagesResponse,
      footerResponse,
      materialEductaivo,
      whatsappResponse,
      menusResponse,
    ] = await Promise.all([
      getPagesGQ(lang),
      getFooter(lang),
      getMaterialEducativo(lang),
      getWhatsapp(lang),
      getMenus(lang),
    ])
    const materialEductivoSort = transformMaterialEducativo(materialEductaivo?.data?.data)
    const menus = menusResponse.data.data
    const footer = footerResponse?.data?.data[0]?.attributes?.footerInfo
    const whatsapp = whatsappResponse?.data?.data[0]?.attributes
    const pages = pagesResponse?.data?.pages
    const updatePage = transformPages(pages?.data, lang)

    const page = updatePage.find(
      (page) => page.locales === lang && page.slug === slug
    )
    if (page.slug === 'blogs' || page.slug === 'publicaciones') {
      const blog = await getBlog(lang)
      const blogsPage = blog.data
      return {
        props: { page: { ...page }, blogsPage, footer, whatsapp, menus },
      }
    }
    if (!page) return { notFound: true }
    return {
      props: {
        page: { ...page },
        footer,
        whatsapp,
        materialEductivoSort,
        menus,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: { error: 'Hubo un error al cargar la página.' },
    }
  }
}

export const getStaticPaths = async () => {
  const lang = await langAll()
  const languages = lang
  const result = []
  for (const language of languages) {
    const menusResponse = await getMenus(language.attributes.code)
    const pages = await getPagesGQ(language.attributes.code)

    const menus = menusResponse.data.data

    menus.forEach((element) => {
      if (element.attributes.slug === 'blog') {
        return
      }
      result.push({
        params: {
          lang: language.attributes.code,
          slug: element.attributes.slug,
          name: element.attributes.title,
        },
      })
    })
  }
  return {
    paths: result,
    fallback: true,
  }
}

export default Page