import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
// import reducer from './slice';
// import reducer from './projects';

export default function () {
  return configureStore({ reducer });
}
