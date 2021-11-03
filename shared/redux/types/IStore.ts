import { AnyAction, Dispatch } from 'redux';

import { RootState } from '../reducers';

export interface IStore {
  dispatch: Dispatch<AnyAction>;
  getState: () => RootState;
}
