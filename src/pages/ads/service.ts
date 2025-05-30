import { client } from "../../api/client";
import type { AdvertType } from "./types";

const ADVERTS_URL = "/api/v1/adverts";

export const getLatestAdverts = async () => {
  let url = ADVERTS_URL;

  const response = await client.get<AdvertType[]>(url);
  return response.data;
};

export const getTags = async () => {
  const response = await client.get(`${ADVERTS_URL}/tags`);
  return response.data;
};

export const getAdvert = async (id: string) => {
  const response = await client.get<AdvertType>(`${ADVERTS_URL}/${id}`);
  return response.data;
};

export const deleteAdvert = async (id: string) => {
  await client.delete(`${ADVERTS_URL}/${id}`);
};
