import { Action } from '@ngrx/store';

import { myShelfActionTypes as actionTypes } from './action.types';





export class ShiftBooksAction implements Action {
  readonly type = actionTypes.SHIFT_BOOKS;

  constructor(
    public moveIndex: number
  ) {}
}
