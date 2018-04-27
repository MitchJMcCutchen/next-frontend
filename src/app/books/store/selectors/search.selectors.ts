import { createSelector } from '@ngrx/store';

import { myShelfState } from '../reducers/my-shelf.reducer';


export const getSearch = createSelector(
  myShelfState,
  (state) => state.search
);

export const getSearchField = createSelector(
  getSearch,
  (state) => state.searchField
);

export const getSearchResults = createSelector(
  getSearch,
  (state) => state.searchResults
);

export const getCurrentSearchBook = createSelector(
  getSearch,
  (state) => state.currentResult
);

