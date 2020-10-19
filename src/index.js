import store from './store';
import { bugAdded, bugRemoved } from './actions';

const unsubscribe = store.subscribe(() => {
	// UI Layer
	console.log('store changed', store.getState());
});
store.dispatch(bugAdded('Bug 1'));

console.log(store.getState());

//place unsubscribe() before removal, because store update notification not needed when you're removing something
unsubscribe();

store.dispatch(bugRemoved(1));
