/**
 * Single location for Actions to be dispatched at `app` level
 */
import { IAction } from '../types/IAction';
import { ApplicationState } from '../types/stores/app';
import { ACTION_TYPES } from '../constants/actionTypes';

export const homeLaunched = (): IAction<ApplicationState> => ({
  type: ACTION_TYPES.HOME.HOME_LAUNCHED,
});

export const bestSelling = (): IAction<ApplicationState> => ({
  type: ACTION_TYPES.HOME.LOAD_BEST_SELLING,
});
