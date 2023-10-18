import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
	value: ''
}

export const newSlice = createSlice({
	name: 'new',
	initialState: initialState,
	reducers: {
		addValue: (state, action) => {
			state.value = action.payload;
		}
	}
})

export const { addValue } = newSlice.actions;

export const newReducer = newSlice.reducer;