import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';

export default function () {
	const store = createStore(reducer, devToolsEnhancer({ trace: true }));
	return store;
}
