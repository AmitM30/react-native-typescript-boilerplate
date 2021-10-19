/**
 * Single location for Actions dispatched at `app` level
 */
import { IAction } from '../types/IAction';
import { ApplicationState } from '../types/stores/app';
import { ACTION_TYPES } from '../constants/actionTypes';
import { SearchState } from '../types/stores/search';

export const searchInitiated = (data: SearchState): IAction<SearchState> => ({
  type: ACTION_TYPES.SEARCH.SEARCH_INITIATED,
  data
});
