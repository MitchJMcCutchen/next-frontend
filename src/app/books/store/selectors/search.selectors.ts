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

export const getSelectedBook = createSelector(
  getSearch,
  (state) => state.selectedBook
);

export const getRatingStep = createSelector(
  getSelectedBook,
  (state) => state.step
);

export const getSearchLoading = createSelector(
  getSearch,
  (state) => state.loading
);

export const getSearchLoaded = createSelector(
  getSearch,
  (state) => state.loaded
);
