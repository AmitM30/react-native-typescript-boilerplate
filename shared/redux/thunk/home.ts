/**
 * Thunks are a great place for application business logic
 */
import { AppDispatch } from '../store';
import { RootState } from '../reducers';
import { HomeService } from '../../services/home';
import { homeDataFetched, homeLaunched } from '../actions/home';

export const loadHome = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(homeLaunched());
  const data = await HomeService.loadData('React Native');

  dispatch(homeDataFetched(data));
};
