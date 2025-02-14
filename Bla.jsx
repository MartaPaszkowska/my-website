import { createSlice } from "@reduxjs/toolkit";

// Inicjalny stan - bez zmiany treści
const initialState = {
	isExpanded: false,
};

// Tworzenie slice'a Redux dla AboutSection
const aboutSlice = createSlice({
	name: "about",
	initialState,
	reducers: {
		toggleExpand: (state) => {
			state.isExpanded = !state.isExpanded;
		},
	},
});

// Eksportowanie akcji i reduktora
export const { toggleExpand } = aboutSlice.actions;
export default aboutSlice.reducer;
