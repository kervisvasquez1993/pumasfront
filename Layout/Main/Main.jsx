import React from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import MobileMenu from "../Menu/MobileMenu";

const Main = ({ children }) => {
  const dataMenu = [
    { name: "Nosotros", url: "/es/nosotros" },
    { name: "Centro de Rescate", url: "/es/rescate" },
    { name: "Santuario", url: "/es/santuario" },
    { name: "Programas", url: "/es/programas" },
    { name: "Blog", url: "/es/blog" },
    { name: "Apoyanos", url: "/es/apoyanos" },
  ];

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Título de tu página</title>
        <meta name="description" content="Descripción de tu página" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        {isMobile ? (
          <MobileMenu
            logo="/images/LogoBlanco.png"
            navigationItems={dataMenu}
          />
        ) : (
          <Menu items={dataMenu} />
        )}
      </header>
      <main className="maxWidthBody">{children}</main>
      <Footer items={""} />
    </>
  );
};

export default Main;
