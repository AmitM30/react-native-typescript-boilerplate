/**
 * Single location for Cart Actions
 */
import { IAction } from '../types/IAction';
import { CartItem, CartState } from '../types/stores/cart';
import { ACTION_TYPES } from '../constants/actionTypes';

export const addToCart = (data: CartItem): IAction<CartItem> => ({
  type: ACTION_TYPES.CART.ADD_TO_CART,
  data
});

export const initCart = (data: CartState): IAction<CartState> => ({
  type: ACTION_TYPES.CART.INIT_CART,
  data
});
