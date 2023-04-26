export interface Client {
  id: string;
  name: string;
}
export interface Clients {
  _id: string;
  name: string;
  document: string;
  address: string;
  phone: string;
}

export interface ToggleClientPayload {
  id: string;
  checked: boolean;
}

export interface ClientState {
  clients: Clients[];
  selectedClientIds: string[];
  selectedClient: Clients | null;
  isModalOpen: boolean;
  filter:string;
}

export interface ClientsLoadedAction {
  type: string;
  payload: {};
}

export interface AddClient {
  name: string;
  document: string;
  address: string;
  phone: string;
}
