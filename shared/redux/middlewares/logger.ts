import { Middleware } from 'redux';

import { IStore } from '../types/IStore';
import { IAction } from '../types/IAction';

export const logger: Middleware = (store: IStore) => next => (action: IAction<any>) => {
  console.log('Initial state', store.getState());
  let result = next(action);
  console.log('Next state', store.getState());

  return result;
}

export const crashReporter: Middleware = (store: IStore) => next => (action: IAction<any>) => {
  try {
    return next(action);
  } catch (err) {
    console.error('err', err);
    // Push this to Error Logging dashboard

    throw err;
  }
}
