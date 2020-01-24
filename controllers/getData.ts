import { getData } from "../services/getData.ts";

export const getDataController = async ({ response }) => {
  response.body = await getData();
};