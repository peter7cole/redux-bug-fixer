import { createAction } from '@reduxjs/toolkit';
import * as actions from './actionTypes';

export const BUG_ADDED = createAction(actions.BUG_ADDED);
export const BUG_RESOLVED = createAction(actions.BUG_RESOLVED);
export const BUG_REMOVED = createAction(actions.BUG_REMOVED);
