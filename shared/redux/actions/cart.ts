/**
 * Single location for Cart Actions
 */
import { IAction } from '../types/IAction';
import { ACTION_TYPES } from '../constants/actionTypes';
import { CartItem, CartState } from '../types/stores/cart';

export const addToCart = (data: CartItem): IAction<CartItem> => ({
  type: ACTION_TYPES.CART.ADD_TO_CART,
  data
});

export const initCart = (data: CartState): IAction<CartState> => ({
  type: ACTION_TYPES.CART.INIT_CART,
  data
});

export const cartLaunched = (data: CartState): IAction<CartState> => ({
  type: ACTION_TYPES.CART.CART_VIEWED,
  data
});
