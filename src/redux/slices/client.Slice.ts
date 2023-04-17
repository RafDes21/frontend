import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ClientState,
  Client,
  ToggleClientPayload,
  Clients,
} from "../interface";

const initialState: ClientState = {
  clients: [],
  selectedClient: null,
  selectedClientIds: [],
  isModalOpen: false,
};

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    saveClients: (state, action: PayloadAction<Clients[]>) => {
      state.clients = action.payload;
    },
    selectClient: (state, action: PayloadAction<Clients>) => {
      state.selectedClient = action.payload;
    },

    toggleClientId: (state, action: PayloadAction<ToggleClientPayload>) => {
      if (action.payload.checked) {
        state.selectedClientIds = [
          ...state.selectedClientIds,
          action.payload.id,
        ];
      } else {
        state.selectedClientIds = state.selectedClientIds.filter((value) => {
          return value !== action.payload.id;
        });
      }
    },
    toggleClientIdClear:(state, action)=>{
      console.log(action.payload);
      
      state.selectedClientIds = action.payload
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export default clientSlice.reducer;
export const {
  saveClients,
  selectClient,
  toggleClientId,
  openModal,
  closeModal,
  toggleClientIdClear
} = clientSlice.actions;
