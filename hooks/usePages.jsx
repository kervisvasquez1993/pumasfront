import { useContext } from "react";
import PagesContext from "../context/PagesProvider";

export const usePages = () => {

    return useContext(PagesContext);
};
export default usePages;
