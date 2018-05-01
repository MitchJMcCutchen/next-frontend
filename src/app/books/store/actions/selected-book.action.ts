import { Action } from '@ngrx/store';

import { searchActionTypes as actionTypes } from './action.types';

export class SetSelectBookAction implements Action {
  readonly type = actionTypes.SET_SELECT_BOOK;

  constructor(
    public book: any
  ) {}
}
