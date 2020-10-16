import store from './store';

store.dispatch({
	type: 'BUG_ADDED',
	payload: {
		description: 'bug1',
	},
});

console.log(store.getState());

store.dispatch({
	type: 'BUG_REMOVED',
	payload: {
		id: 1,
	},
});

console.log(store.getState());
