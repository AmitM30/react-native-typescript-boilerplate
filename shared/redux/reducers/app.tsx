import { IAction } from '../types/IAction';
import { ACTION_TYPES } from '../constants/actionTypes';

const initialState = {
  isLoading: true,
};

export default (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case ACTION_TYPES.SPLASH.SPLASH_LAUNCHED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
