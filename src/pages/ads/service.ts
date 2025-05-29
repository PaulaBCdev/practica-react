import { client } from "../../api/client";
import type { AdvertType } from "./types";

const ADVERTS_URL = "/api/v1/adverts?";

export const getLatestAdverts = async () => {
  let url = ADVERTS_URL;

  const response = await client.get<AdvertType[]>(url);
  return response.data;
};

export const getTags = async () => {
  const response = await client.get("/api/v1/adverts/tags");
  return response.data;
};
