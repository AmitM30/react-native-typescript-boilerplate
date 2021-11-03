/**
 * This file includes all the reducers under reducers directory,
 * Import all and add to combineReducers to use any among whole app
 */
import { combineReducers } from 'redux';

import app from './app';
import { IAction } from '../types/IAction';
import { ApplicationState } from '../types/stores/app';

export interface RootState {
  app: ApplicationState;
}

export default combineReducers<RootState, IAction<any>>({
  app,
});
