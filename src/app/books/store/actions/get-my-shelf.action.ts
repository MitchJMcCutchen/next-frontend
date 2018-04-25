import { Action } from '@ngrx/store';

import { myShelfActionTypes as actionTypes } from './action.types';





export class GetMyShelfAction implements Action {
  readonly type = actionTypes.GET_MY_SHELF;
}
