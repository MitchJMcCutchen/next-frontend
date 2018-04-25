import * as fromRouter from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

import { getRouterState } from './../reducers/router.reducer';


export const getCurrentUrl = createSelector(getRouterState, (state: fromRouter.RouterReducerState) => state && state.state.url);
