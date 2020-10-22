import * as actions from './actionTypes';
import { nanoid } from 'nanoid';

// Reducers are pure functions, free of side effects. Declare initial state as an empty array, because when we start the app, the store is undefined, and you don't want reducer being called with undefined as its first argument

// let lastId = 0;

const reducer = (state = [], action) => {
	switch (action.type) {
		case actions.BUG_ADDED:
			return [
				...state,
				{
					// id: ++lastId,
					id: nanoid(),
					description: action.payload.description,
					resolved: false,
				},
			];
		case actions.BUG_RESOLVED:
			return state.map(bug => {
				if (bug.id === action.payload.id) return { ...bug, resolved: true };
				// remember to return an object with all its original properties and the modified property
			});
		case actions.BUG_REMOVED:
			return state.filter(bug => bug.id !== action.payload.id);
		default:
			return state;
	}
};

export default reducer;
