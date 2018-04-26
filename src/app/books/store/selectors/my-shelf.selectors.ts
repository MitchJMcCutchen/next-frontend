import { createSelector } from '@ngrx/store';

import { myShelfState } from '../reducers/my-shelf.reducer';

export const getBooks = createSelector(
  myShelfState,
  (state) => state.books
);
export const getCurrentBook = createSelector(
  myShelfState,
  (state) => state.current
);
