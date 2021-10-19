import { IAction } from '../types/IAction';
import { ACTION_TYPES } from '../constants/actionTypes';
import { CartItem, CartState } from '../types/stores/cart';

const initialState: CartState = {
  items: [],
};

export default (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case ACTION_TYPES.CART.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.data],
      };
    default:
      return state;
  }
};
