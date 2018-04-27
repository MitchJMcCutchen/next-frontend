import { createSelector } from '@ngrx/store';

import { getShelfState } from '../reducers/my-shelf.reducer';

export const getBooks = createSelector(
  getShelfState,
  (state) => state.books
);
export const getCurrentBook = createSelector(
  getShelfState,
  (state) => state.current
);
