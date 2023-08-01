import Link from "next/link";
import style from "./Button.module.css";

const ButtonView = ({ children, className, link = "" }) => {
    return (
        <Link className={`${className} btnPrimary py-2  `} href={link}>
            {children}
        </Link>
    );
};

export default ButtonView;
