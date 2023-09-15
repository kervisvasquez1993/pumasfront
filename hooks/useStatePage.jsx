import { useContext } from "react";
import StatePageProvider from "../Context/AlertProvider";

export const useStatePage = () => {
    return useContext(StatePageProvider);
};
export default useStatePage;
