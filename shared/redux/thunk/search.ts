/**
 * Thunks are a great place for application business logic
 */
import { SearchService } from '../../services/search';
import { searchInitiated } from '../actions/search';
import { AppDispatch } from '../store';
import { SearchState } from '../types/stores/search';

export const searchRequested = (data: SearchState) => async (dispatch: AppDispatch) => {
  dispatch(searchInitiated(data));
  const result = await SearchService.fetch(data.query);

  return result;
};
