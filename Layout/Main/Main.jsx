import Menu from "../Menu/Menu";

const Main = ({ children }) => {
    const dataMenu = [
        { name: "Nosotros", url: "/es/nosotros" },
        { name: "Centro de Rescate", url: "/es/rescate" },
        { name: "Santuario", url: "/es/santuario" },
        { name: "Programas", url: "/es/programas" },
        { name: "Blog", url: "/es/blog" },
    ];
    return (
        <>
            <header>
                <Menu items={dataMenu} />
            </header>

            <main>{children}</main>

            <Footer items={""} />
        </>
    );
};

export default Main;
