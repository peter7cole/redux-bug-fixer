// use better way to track id, possibly npm nanoid()
let lastId = 0;

// pure functions, free of side effects

const reducer = (state = [], action) => {
	if (action.type === 'BUG_ADDED') {
		return [
			...state,
			{
				id: ++lastId,
				description: action.payload.description,
				resolved: false,
			},
		];
	} else if (action.type === 'BUG_REMOVED') {
		return state.filter(bug => bug.id !== action.payload.id);
	}
	return state;
};

export default reducer;

// using switch is a style choice

// const reducerSwitch = (state = [], action) => {
// 	switch (action) {
// 		case 'BUG_ADDED':
// 			return [
// 				...state,
// 				{
// 					id: ++lastId,
// 					description: action.payload.description,
// 					resolved: false,
// 				},
// 			];
// 		case 'BUG_REMOVED':
// 			return state.filter(bug => bug.id !== action.payload.id);
// 		default:
// 			return state;
// 	}
// };
