/**
 * Single location for Search Actions
 */
import { IAction } from '../types/IAction';
import { SearchState } from '../types/stores/search';
import { ACTION_TYPES } from '../constants/actionTypes';

export const searchInitiated = (data: SearchState): IAction<SearchState> => ({
  type: ACTION_TYPES.SEARCH.SEARCH_INITIATED,
  data
});
