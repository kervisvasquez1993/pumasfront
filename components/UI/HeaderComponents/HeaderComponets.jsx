import { useState } from "react";

const HeaderComponets = ({
    children,
    className,
    alignment,
    src = "",
}) => {
    const [alignmentClasses, setAlignmentClasses] = useState("");
    const backgroundImageStyle = {
        backgroundImage: `url(${src})`,
      };
    
    
    if (alignment === "left") {
        setAlignmentClasses("text-left");
    } else if (alignment === "right") {
        setAlignmentClasses("text-right");
    } else if (alignment === "center") {
        setAlignmentClasses("text-center");
    }

    return (
        <section style={backgroundImageStyle}>
            <h2 className={`${className} ${alignmentClasses}`}>{children}</h2>
        </section>
    );
};

export default HeaderComponets;
