import { Action } from '@ngrx/store';

import { myShelfActionTypes as actionTypes } from './action.types';





export class OpenSearchAction implements Action {
  readonly type = actionTypes.OPEN_SEARCH;
}
