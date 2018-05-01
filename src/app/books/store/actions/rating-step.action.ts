import { Action } from '@ngrx/store';

import { searchActionTypes as actionTypes } from './action.types';

export class RatingStepAction implements Action {
  readonly type = actionTypes.RATING_STEP;

  constructor(
    public step: string,
    public ratings: any
  ) {}
}
