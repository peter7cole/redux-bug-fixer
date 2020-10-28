import configureStore from './store/store';
import * as actions from './store/actions';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
	// UI Layer
	console.log('Store changed!', store.getState());
});

store.dispatch(actions.BUG_ADDED({ description: 'Bug 1' }));
store.dispatch(actions.BUG_ADDED({ description: 'Bug 2' }));
store.dispatch(actions.BUG_ADDED({ description: 'Bug 3' }));
store.dispatch(actions.BUG_RESOLVED({ id: store.getState()[0].id }));

// place unsubscribe before removal, because store update notification not needed when you're removing something
unsubscribe();

store.dispatch(actions.BUG_REMOVED(store.getState()[0].id));
