import { useContext } from "react";
import ScreenSizeContext from "../context/ScreenSizeProvider";

export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};
export default useScreenSize;
