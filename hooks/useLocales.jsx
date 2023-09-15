import { useContext } from "react";
import LocaleContext from "../context/LocalesProvider";

export const useLocale = () => {
  return useContext(LocaleContext);
};
export default useLocale;
