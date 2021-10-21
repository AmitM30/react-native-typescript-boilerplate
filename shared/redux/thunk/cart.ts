/**
 * Thunks are a great place for application business logic
 */
import { Navigation } from 'react-native-navigation';

import { AppDispatch } from '../store';
import { RootState } from '../reducers';
import { addToCart } from '../actions/cart';
import { CartItem } from '../types/stores/cart';
import { SCREENS } from '../../../src/constants/screen';

export const addItemsToCart = (item: CartItem) => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(addToCart(item));

  const store = getState().cart;
  Navigation.mergeOptions(SCREENS.Cart, {
    bottomTab: {
      badge: `${store.items.length}`
    }
  })
};
