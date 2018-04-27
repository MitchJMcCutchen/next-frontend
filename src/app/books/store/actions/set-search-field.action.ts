import { Action } from '@ngrx/store';

import { searchActionTypes as actionTypes } from './action.types';

export class SetSearchFieldAction implements Action {
  readonly type = actionTypes.SET_SEARCH_FIELD;

  constructor(
    public searchField: string
  ) {}
}
