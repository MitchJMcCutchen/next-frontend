import { Action } from '@ngrx/store';

import { userActionTypes as actionTypes } from './action.types';





export class UnsetUserAction implements Action {
  readonly type = actionTypes.UNSET_USER;
}
