import Link from "next/link";
import style from "./Button.module.css";

const ButtonView = ({ children, className, link = "", blank = false }) => {
    const linkProps = blank ? { href: `/${link}`, target: "_blank" } : { href: `/${link}` };
    return (
        <Link className={`${className} btnPrimary py-2  `} {...linkProps}>
            {children}
        </Link>
    );
};

export default ButtonView;
