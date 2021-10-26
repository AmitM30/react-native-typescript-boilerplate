/**
 * Thunks are a great place for application business logic
 */
import { AppDispatch } from '../store';
import { RootState } from '../reducers';
import { initCart } from '../actions/cart';
import Config from '../../services/config';
import { CartItem } from '../types/stores/cart';
import { splashLaunched } from '../actions/app';
import Storage from '../../services/core/storage';
import { initRecentSearches } from '../actions/search';
import { RecentSearches } from '../types/stores/search';

export const splashScreenLaunched = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(splashLaunched());
  /**
   * Application launch Logic can go here, like
   * - Validating user token
   * - Getting data from async storage
   * - Making an API call needed for booting app
   */

  const cart: Array<CartItem>  = await Storage.get(Config.Keys.cart);
  dispatch(initCart({ items: cart || [] }));

  const recentSearches: RecentSearches = await Storage.get(Config.Keys.recentSearches);
  dispatch(initRecentSearches(recentSearches || []));
};
