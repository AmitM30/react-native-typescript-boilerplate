import { IAction } from '../types/IAction';
import { RecentSearches } from '../types/stores/search';
import { ACTION_TYPES } from '../constants/actionTypes';

const initialState: RecentSearches = {
  list: [],
};

export default (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case ACTION_TYPES.SEARCH.SEARCH_INITIATED:
      if (state.list.indexOf(action.data.query) >= 0)
        return { ...state };
      else
        return {
          ...state,
          list: [...state.list, action.data.query],
        };
    case ACTION_TYPES.SEARCH.INIT_SEARCH:
      return {
        ...state,
        list: action.data,
      };
    default:
      return state;
  }
};
