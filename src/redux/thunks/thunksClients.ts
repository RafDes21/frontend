import { Dispatch } from "redux";
import { AddClient, ClientsLoadedAction } from "../interface";
import { saveClients, selectClient } from "../slices/client.Slice";
import {
  getClients,
  createClient,
  getClientById,
  updateClientById,
  deleteClientsByIds,
} from "./clients.api";

export const addClient = async (client: AddClient) => {
  await createClient(client);
};

export const fetchClients =
  () => async (dispatch: Dispatch<ClientsLoadedAction>) => {
    try {
      const clients = await getClients();
      dispatch(saveClients(clients));
    } catch (error) {
      console.log(error);
    }
  };

export const fetchClientById = (id: string) => {
  return async (dispatch: Dispatch<ClientsLoadedAction>) => {
    try {
      const client = await getClientById(id);

      dispatch(selectClient(client));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateClient = async (id: string, client: AddClient) => {
  await updateClientById(id, client);
};

export const deleteClients = async (ids: string[]) => {
  await deleteClientsByIds(ids);
};
