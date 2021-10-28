/**
 * Thunks are a great place for application business logic
 */
import { Navigation } from 'react-native-navigation';

import { AppDispatch } from '../store';
import { RootState } from '../reducers';
import Config from '../../../src/config';
import { CartItem } from '../types/stores/cart';
import Storage from '../../services/core/storage';
import { CartService } from '../../services/cart';
import { SCREENS } from '../../../src/constants/screen';
import { addToCart, cartLaunched } from '../actions/cart';

export const addItemsToCart = (item: CartItem) => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(addToCart(item));
  // if user logged in
  // then save server side cart
  // else may be save on local db, async storage

  const store = getState().cart;
  await Storage.set(Config.Keys.cart, store.items);
  Navigation.mergeOptions(SCREENS.Cart, {
    bottomTab: {
      badge: `${store.items.length}`
    }
  })
};

export const cartViewed = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const cart = getState().cart;
  dispatch(cartLaunched(cart));

  const response = await CartService.fetch(cart);
  return response;
};
