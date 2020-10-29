import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer';
import reducer from './slice';

export default function () {
	return configureStore({ reducer });
}
