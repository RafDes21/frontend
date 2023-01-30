import { saveClients, saveClient } from "../slices/clienteSlice";
import axios from "axios";

const apiHost = process.env.REACT_APP_API_HOST;
console.log(apiHost)
export const getClients = () => {
  return async (dispatch: any) => {
    const res = await axios.get(`${apiHost}/api/clientes`);
    dispatch(saveClients(res.data));
  };
};

export const getClientById = (id: string) => {
  return async (dispatch: any) => {
    const res = await axios.get(`${apiHost}/api/clientes/${id}`);
    dispatch(saveClient(res.data));
  };
};

export const deleteClientsByIds = (ids: string[]) => {
  return async (dispatch: any) => {
    await axios.delete(`${apiHost}/api/clientes?ids=${ids.join(",")}`);
    dispatch(getClients());
  };
};

export const updateClientById = (id: string, client: any) => {
  return async () => {
    await axios.put(`${apiHost}/api/clientes/${id}`, client);
  };
};

export const createClient = (client: any) => {
  return async () => {
    await axios.post(`${apiHost}/api/clientes`, client);
  };
};

export const getClientId = async (id: string) => {
  return await axios.get(`${apiHost}/api/clientes/${id}`);
};
