import ActionTypes from '../constants/actionTypes';

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SPLASH_LAUNCHED:
      return {
        ...state
      };
    default:
      return state;
  }
};
