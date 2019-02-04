import { ACTION_TYPES } from '../constants/actionTypes';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.SPLASH_LAUNCHED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
