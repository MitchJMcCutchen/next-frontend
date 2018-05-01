import { Action } from '@ngrx/store';

import { searchActionTypes as actionTypes } from './action.types';





export class AddBookAction implements Action {
  readonly type = actionTypes.ADD_BOOK;

  constructor(
    public body: any
  ) {}
}
