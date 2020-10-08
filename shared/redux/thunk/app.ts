/**
 * Thunks are a great place for application business logic
 */
import { splashLaunched } from '../actions/app';
import { AppDispatch } from '../store';

export const splashScreenLaunched = () => async (dispatch: AppDispatch) => {
  dispatch(splashLaunched());
  /**
   * Application launch Logic can go here, like
   * - Validating user token
   * - Getting data from async storage
   * - Making an API call needed for booting app
   */
};
