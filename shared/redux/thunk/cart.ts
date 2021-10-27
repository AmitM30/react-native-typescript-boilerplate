/**
 * Thunks are a great place for application business logic
 */
import { Navigation } from 'react-native-navigation';

import { AppDispatch } from '../store';
import { RootState } from '../reducers';
import { addToCart } from '../actions/cart';
import { CartItem } from '../types/stores/cart';
import { SCREENS } from '../../../src/constants/screen';
import Storage from '../../services/core/storage';
import Config from '../../../src/config';

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
