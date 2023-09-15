import { useContext } from "react";
import ModeloContext from "../context/ModelosProvider";

export const useModelo = () => {
  
  return useContext(ModeloContext);
};
export default useModelo;
