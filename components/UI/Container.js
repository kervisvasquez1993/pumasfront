
const Container = ({
    fullWill = false,
    children,
    alignment = "left",
    direction = "row",
    className,
}) => {
    // Determinar las clases CSS a aplicar
    let classes = "container";
    if (fullWill) {
        classes += " full-will";
    } else {
        classes += " with-padding";
    }

    if (alignment === "center") {
        classes += " center-align";
    } else if (alignment === "right") {
        classes += " right-align";
    }

    if (direction === "column") {
        classes += " flex-column";
    }

    if (className) {
        classes += ` ${className}`;
    }

    return <div className={classes}>{children}</div>;
};

export default Container;
