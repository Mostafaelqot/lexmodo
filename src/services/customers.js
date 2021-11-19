import axios from "axios";
import { cleanEmpty } from "./cleanEmpty";

export const getCustomers = async (filter) => {
  return await axios
    .get(`http://localhost:8000/customers`, {
      params: cleanEmpty(filter),
    })
    .then((res) => res)
    .catch((err) => err.response);
};
