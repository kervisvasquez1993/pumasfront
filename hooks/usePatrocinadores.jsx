import { useContext } from "react";
import PatrocinadoresContext from "../context/PatrocinadoresProvider";

export const usePatocinadores = () => {

    return useContext(PatrocinadoresContext);
};
export default usePatocinadores;
