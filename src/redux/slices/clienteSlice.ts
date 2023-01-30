import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToggleClientPayload {
  id: string;
  checked: boolean;
}
interface ClientState {
  clients: any[];
  selectedClientIds: string[];
  client: any;
  stateModal: boolean;
}
const initialState: ClientState = {
  clients: [],
  client: [],
  selectedClientIds: [],
  stateModal: false,
};

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    saveClients: (state, action: PayloadAction<[]>) => {
      state.clients = action.payload;
    },
    saveClient: (state, action: PayloadAction<[]>) => {
      state.client = action.payload;
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
    updateStateModal: (state, action: PayloadAction<boolean>) => {
      state.stateModal = action.payload;
    },
  },
});

export default clientSlice.reducer;
export const { saveClients, saveClient, toggleClientId, updateStateModal } =
  clientSlice.actions;
