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
		default:
			return state;
	}
};

export default reducer;
