import { client, setAuthorizationHeader } from "../../api/client";
import storage from "../../utils/storage";
import type { Credentials, Login } from "./types";

export const login = async (credentials: Credentials, isChecked: boolean) => {
  const response = await client.post<Login>("/api/auth/login", credentials);
  const accessToken = response.data.accessToken;

  if (isChecked) {
    storage.set("auth", accessToken);
    console.log("is checked");
  }

  setAuthorizationHeader(accessToken);
};
