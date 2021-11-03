/**
 * Thunks are a great place for application business logic
 */
import { AppDispatch } from '../store';
import { RootState } from '../reducers';
import { splashLaunched } from '../actions/app';

export const splashScreenLaunched = () => (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(splashLaunched());
  /**
   * Application launch Logic can go here, like
   * - Validating user token
   * - Getting data from async storage
   * - Making an API call needed for booting app
   */
};
