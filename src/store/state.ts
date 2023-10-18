import { configureStore } from "@reduxjs/toolkit";
import { newReducer } from "./slices";

export const store = configureStore({
	reducer: newReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch