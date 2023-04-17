import axios from "axios";
import { AddClient } from "../interface";

const apiHost = process.env.REACT_APP_API_URL;

export const createClient = async (client: AddClient) => {
  try {
    await axios.post(`${apiHost}/api/clients`, client);
  } catch (error) {
    console.error(error);
  }
};

export const getClients = async () => {
  try {
    const response = await axios.get(`${apiHost}/api/clients`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getClientById = async (id: any) => {
  try {
    const response = await axios.get(`${apiHost}/api/clients/${id}`);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateClientById = async (id: string, client: AddClient) => {
  try {
    await axios.put(`${apiHost}/api/client/${id}`, client);
  } catch (error) {
    console.error(error);
  }
};
export const deleteClientsByIds = async (ids: any) => {
  try {
    await axios.delete(`${apiHost}/api/client?ids=${ids.join(",")}`);
  } catch (error) {
    console.error(error);
  }
};



// export const getClientId = async (id: any) => {
//   try {
//     const response = await axios.get(`${apiHost}/api/clients/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

