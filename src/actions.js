import * as actions from './actionTypes';

export const BUG_ADDED = description => ({
	type: actions.BUG_ADDED,
	payload: {
		description,
		// remember: 'description' is shorthand for 'description: description'
	},
});

export const BUG_RESOLVED = id => ({
	type: actions.BUG_RESOLVED,
	payload: {
		id,
	},
});

export const BUG_REMOVED = id => ({
	type: actions.BUG_REMOVED,
	payload: {
		id,
	},
});
