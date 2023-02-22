import { createAction } from "@reduxjs/toolkit";
import { phoneActions } from "./phone.actions.types";

export const clickNumber = createAction<string>(phoneActions.clickNumber);

export const call = createAction<boolean>(phoneActions.call);

export const hang = createAction<boolean>(phoneActions.hang);

export const deleteNumber = createAction<string>(phoneActions.deleteNumber);
