/**
 * Single location for Search Actions
 */
import { IAction } from '../types/IAction';
import { RecentSearches, SearchState } from '../types/stores/search';
import { ACTION_TYPES } from '../constants/actionTypes';

export const searchInitiated = (data: SearchState): IAction<SearchState> => ({
  type: ACTION_TYPES.SEARCH.SEARCH_INITIATED,
  data
});

export const initRecentSearches = (data: RecentSearches): IAction<RecentSearches> => ({
  type: ACTION_TYPES.SEARCH.INIT_SEARCH,
  data
});
