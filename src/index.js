import store from './store';

const unsubscribe = store.subscribe(() => {
	// UI Layer
	console.log('store changed', store.getState());
});

store.dispatch({
	type: 'BUG_ADDED',
	payload: {
		description: 'bug1',
	},
});

unsubscribe();

store.dispatch({
	type: 'BUG_REMOVED',
	payload: {
		id: 1,
	},
});

console.log(store.getState());
