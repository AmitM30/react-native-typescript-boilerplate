/**
 * Single location for Actions dispatched at `app` level
 */
import { IAction } from '../types/IAction';
import { ApplicationState } from '../types/stores/app';
import { ACTION_TYPES } from '../constants/actionTypes';

export const homeLaunched = (): IAction<ApplicationState> => ({
  type: ACTION_TYPES.HOME.HOME_LAUNCHED,
});

export const homeDataFetched = (data: any): IAction<ApplicationState> => ({
  data,
  type: ACTION_TYPES.HOME.HOME_DATA_FETCHED,
});
