import { useEffect, useState } from "react";
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
