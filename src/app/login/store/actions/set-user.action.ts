import { Action } from '@ngrx/store';

import { userActionTypes as actionTypes } from './action.types';

export class SetUserAction implements Action {
  readonly type = actionTypes.SET_USER;

  constructor (
    public email: string,
    public firstName: string,
    public lastName: string,
    public pic: string
  ) {}
}
