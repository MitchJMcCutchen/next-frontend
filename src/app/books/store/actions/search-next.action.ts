import { Action } from '@ngrx/store';

import { searchActionTypes as actionTypes } from './action.types';

export class SearchNextAction implements Action {
  readonly type = actionTypes.SEARCH_NEXT;

  constructor(
    public searchField: string,
    public nextIndex: number
  ) {}
}
