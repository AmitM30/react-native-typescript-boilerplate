/**
 * Single location for Actions dispatched at `app` level
 */
import { IAction } from '../types/IAction';
import { CartItem } from '../types/stores/cart';
import { ACTION_TYPES } from '../constants/actionTypes';

export const addToCart = (data: CartItem): IAction<CartItem> => ({
  type: ACTION_TYPES.CART.ADD_TO_CART,
  data
});
