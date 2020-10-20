import reducer from '../src/reducer';

function createStore(reducer) {
	let state;
	// an array so that you can have multiple UI components listening to the store
	let listeners = [];

	function dispatch(action) {
		// call reducer to get new state
		state = reducer(state, action);
		// notify the subscribers
		for (let i = 0; i < listeners.length; i++) {
			// console.log(listeners[i]);
			listeners[i]();
		}
	}

	function subscribe(listener) {
		// push the callback function from the subscribe call in index.js into the listeners array as a new listener
		listeners.push(listener);
	}

	function getState() {
		// a private property state variable, private to this store
		return state;
	}
	// expose these functions
	return {
		dispatch,
		subscribe,
		getState,
	};
}

export default createStore(reducer);
