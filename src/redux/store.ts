import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./slices/client.Slice";

const store = configureStore({
  reducer: {
    clients: clientReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
