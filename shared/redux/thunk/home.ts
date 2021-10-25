/**
 * Thunks are a great place for application business logic
 */
import { AppDispatch } from '../store';
import { RootState } from '../reducers';
import { homeLaunched, bestSelling } from '../actions/home';
import { SearchService } from '../../services/search';
import { SearchResponse } from '../types/search/ISearchResponse';

export const splashScreenLaunched = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(homeLaunched());
  /**
   * Application launch Logic can go here, like
   * - Validating user token
   * - Getting data from async storage
   * - Making an API call needed for booting app
   */
};

export const loadBestSelling = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(bestSelling());
  const result: SearchResponse = await SearchService.fetch('Bang Olufsen');

  return result;
};
