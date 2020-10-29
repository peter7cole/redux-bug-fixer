import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const slice = createSlice({
	name: 'projects',
	initialState: [],
	reducers: {
		// action -> action handler
		PROJECT_ADDED: (projects, action) => {
			projects.push({
				id: nanoid(),
				name: action.payload.name,
			});
		},
	},
});

export const { PROJECT_ADDED } = slice.actions;
export default slice.reducer;
