import * as actions from './actionTypes';

// use better way to track id, possibly npm nanoid() or Date.now()
let lastId = 0;

// pure functions, free of side effects

const reducer = (state = [], action) => {
	switch (action) {
		case actions.BUG_ADDED:
			return [
				...state,
				{
					id: ++lastId,
					description: action.payload.description,
					resolved: false,
				},
			];
		case actions.BUG_REMOVED:
			return state.filter(bug => bug.id !== action.payload.id);
		case actions.BUG_RESOLVED:
			return state.map(bug => {
				if (bug.id === action.payload.id) return { ...bug, resolved: true };
				// remember to return an object with all its original properties and the modified property
			});
		default:
			return state;
	}
};

export default reducer;
