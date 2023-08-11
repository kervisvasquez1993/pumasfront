import { useContext } from "react";
import DonationsContext from "../context/DonationsProvider";

export const useDonations = () => {
  return useContext(DonationsContext);
};
export default useDonations;
