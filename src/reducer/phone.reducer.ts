import { createReducer } from "@reduxjs/toolkit";
import { call, clickNumber, deleteNumber, hang } from "./phone.actions.creator";

const initialState: string = "";

export const phoneReducer = createReducer(initialState, (builder) => {
  builder.addCase(clickNumber, (state, { payload }) => state + payload);
  builder.addCase(hang, (state, { payload }) => state);
  builder.addCase(deleteNumber, (state, { payload }) => (state = payload));
  builder.addCase(call, (state) => state);
  builder.addDefaultCase((state) => state);
});
