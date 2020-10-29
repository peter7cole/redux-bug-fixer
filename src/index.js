import configureStore from './store/store';
// import * as actions from './store/actions';
// import { BUG_ADDED, BUG_RESOLVED, BUG_REMOVED } from './store/actions';
import { BUG_ADDED, BUG_RESOLVED, BUG_REMOVED } from './store/slice';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
	// UI Layer
	console.log('Store changed!', store.getState());
});

store.dispatch(BUG_ADDED({ description: 'Bug 1' }));
store.dispatch(BUG_ADDED({ description: 'Bug 2' }));
store.dispatch(BUG_ADDED({ description: 'Bug 3' }));
store.dispatch(BUG_RESOLVED({ id: store.getState()[0].id }));

// place unsubscribe before removal, because store update notification not needed when you're removing something
unsubscribe();

store.dispatch(BUG_REMOVED({ id: store.getState()[0].id }));
