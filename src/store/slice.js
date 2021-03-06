import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const slice = createSlice({
	name: 'bugs',
	initialState: [],
	reducers: {
		BUG_ADDED: (bugs, action) => {
			bugs.push({
				id: nanoid(),
				description: action.payload.description,
				resolved: false,
			});
		},
		BUG_RESOLVED: (bugs, action) => {
			const index = bugs.findIndex(bug => bug.id === action.payload.id);
			bugs[index].resolved = true;
		},
		BUG_REMOVED: (bugs, action) => {
			return bugs.filter(bug => bug.id !== action.payload.id);
		},
	},
});

export const { BUG_ADDED, BUG_RESOLVED, BUG_REMOVED } = slice.actions;
export default slice.reducer;
