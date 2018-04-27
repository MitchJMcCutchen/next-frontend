import { Action } from '@ngrx/store';

import { searchActionTypes as actionTypes } from './action.types';

export class SearchAction implements Action {
  readonly type = actionTypes.SEARCH;

  constructor(
    public searchField: string
  ) {}
}
