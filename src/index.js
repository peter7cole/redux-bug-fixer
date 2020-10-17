import store from './store';
import * as actions from './actionTypes';

const unsubscribe = store.subscribe(() => {
	// UI Layer
	console.log('store changed', store.getState());
});

store.dispatch({
	type: actions.BUG_ADDED,
	payload: {
		description: 'bug1',
	},
});

console.log(store.getState());
// unsubscribe();

store.dispatch({
	type: actions.BUG_REMOVED,
	payload: {
		id: 1,
	},
});
