import axios from "axios";
import { STORES_API_URL, STORES_DETILE_API_URL } from "util/BaseUrl";

interface store {
  page: number;
  style: string;
}

interface storedetile {
  id: number;
}

export const storesGET = async ({ page, style }: store) =>
  await axios.get(STORES_API_URL, {
    params: { page: page, style: style },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    },
  });

export const storesDetileGET = async ({ id }: storedetile) =>
  await axios.get(`${STORES_DETILE_API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    },
  });
