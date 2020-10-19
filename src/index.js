import store from './store';
import * as actions from './actions';

const unsubscribe = store.subscribe(() => {
	// UI Layer
	console.log('Store changed!', store.getState());
});

store.dispatch(actions.BUG_ADDED('Bug 1'));

store.dispatch(actions.BUG_RESOLVED(1));

// place unsubscribe() before removal, because store update notification not needed when you're removing something
unsubscribe();

store.dispatch(actions.BUG_REMOVED(1));
