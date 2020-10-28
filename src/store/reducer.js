import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { nanoid } from 'nanoid';

export default createReducer([], {
	// key: value
	// actions: functions (event => event handler)
	[actions.BUG_ADDED.type]: (bugs, action) => {
		bugs.push({
			id: nanoid(),
			description: action.payload.description,
			resolved: false,
		});
	},
	[actions.BUG_RESOLVED.type]: (bugs, action) => {
		const index = bugs.findIndex(bug => bug.id === action.payload.id);
		bugs[index].resolved = true;
	},
	[actions.BUG_REMOVED.type]: (bugs, action) => {
		return bugs.filter(bug => bug.id !== action.payload.id);
	},
});

// Reducers are pure functions, free of side effects. Declare initial state as an empty array, because when we start the app, the store is undefined, and you don't want reducer being called with undefined as its first argument

// const reducer = (state = [], action) => {
// 	switch (action.type) {
// 		case actions.BUG_ADDED.type:
// 			return [
// 				...state,
// 				{
// 					id: nanoid(),
// 					description: action.payload.description,
// 					resolved: false,
// 				},
// 			];
// 		case actions.BUG_RESOLVED.type:
// 			return state.map(bug => {
// 				if (bug.id === action.payload.id) {
// 					return { ...bug, resolved: true };
// 				} else {
// 					// Question: should I be returning { ...bug } instead of bug?
// 					return bug;
// 				}
// 				// remember to return an object with all its original properties and the modified property
// 			});
// 		case actions.BUG_REMOVED.type:
// 			return state.filter(bug => bug.id !== action.payload.id);
// 		default:
// 			return state;
// 	}
// };
