import { useContext } from "react";
import MenuContext from "../context/MenuProvider";

export const useMenu = () => {
  return useContext(MenuContext);
};
export default useMenu;
