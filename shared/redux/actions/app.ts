/**
 * Single location for Actions dispatched at `app` level
 */
import { IAction } from '../types/IAction';
import { ApplicationState } from '../types/stores/app';
import { ACTION_TYPES } from '../constants/actionTypes';

export const splashLaunched = (): IAction<ApplicationState> => ({
  type: ACTION_TYPES.SPLASH.SPLASH_LAUNCHED,
});
