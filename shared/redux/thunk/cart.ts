/**
 * Thunks are a great place for application business logic
 */
import { Navigation } from 'react-native-navigation';

import { addToCart } from '../actions/cart';
import Store, { AppDispatch } from '../store';
import { CartItem } from '../types/stores/cart';
import { SCREENS } from '../../../src/constants/screen';

export const addItemsToCart = (item: CartItem) => async (dispatch: AppDispatch) => {
  dispatch(addToCart(item));

  const store = Store.getState().cart;
  Navigation.mergeOptions(SCREENS.Cart, {
    bottomTab: {
      badge: `${store.items.length}`
    }
  })
};
