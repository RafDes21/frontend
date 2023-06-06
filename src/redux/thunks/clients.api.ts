import axios from "axios";
import { AddClient } from "../interface";

const apiHost = process.env.REACT_APP_API_HOST;

export const createClient = async (client: AddClient) => {
  try {
    await axios.post(`${apiHost}/patients`, client);
  } catch (error) {
    console.error(error);
  }
};

export const getClients = async () => {
  try {
    const response = await axios.get(`${apiHost}/patients`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getClientById = async (id: any) => {
  try {
    const response = await axios.get(`${apiHost}/patients/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateClientById = async (id: string, client: AddClient) => {
  try {
    await axios.put(`${apiHost}/patients/${id}`, client);
  } catch (error) {
    console.error(error);
  }
};
export const deleteClientsByIds = async (ids: any) => {
  try {
    await axios.delete(`${apiHost}/patients?ids=${ids.join(",")}`);
  } catch (error) {
    console.error(error);
  }
};
