/**
 * Single location for Actions dispatched at `app` level
 */
import { ACTION_TYPES } from '../constants/actionTypes';

export const splashLaunched = () => ({
  type: ACTION_TYPES.SPLASH.SPLASH_LAUNCHED,
});
