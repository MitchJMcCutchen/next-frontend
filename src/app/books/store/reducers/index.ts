import { ActionReducerMap } from '@ngrx/store';

import { IMyShelfState } from '../../interfaces/IMyShelfState.interface';
import { ISearchState } from '../../interfaces/ISearchState.interface';
import { myShelfReducer } from './my-shelf.reducer';
import { searchReducer } from './search.reducer';

export interface MyShelfState {
  shelf: IMyShelfState;
  search: ISearchState;
}

export const reducers: ActionReducerMap<MyShelfState> = {
  shelf: myShelfReducer,
  search: searchReducer
};
