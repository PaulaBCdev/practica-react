import { client } from "../../api/client";
import type { AdvertType } from "./types";

const ADVERTS_URL = "/api/v1/adverts";

export const getLatestAdverts = async (name?: string, price?: number[]) => {
  let url = "/api/v1/adverts?";

  if (name) {
    url = url + `name=${name}%`;
  }
  if (price?.length) {
    url = url + `&price=${price[0]}&price=${price[1]}`;
  }

  const response = await client.get<AdvertType[]>(url);
  return response.data;
};
