import { Action } from 'redux';

export interface IAction<T> extends Action {
  data?: T;
  type: string;
}
