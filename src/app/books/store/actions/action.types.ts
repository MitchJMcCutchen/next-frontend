const myShelfActionTypes = {
  GET_MY_SHELF: '[My Shelf] Get My Shelf',
  GET_MY_SHELF_SUCCESS: '[My Shelf] Get My Shelf Success',

  SHIFT_BOOKS: '[My Shelf] Shift Books',

  OPEN_SEARCH: '[My Shelf] Open Search'
};

const searchActionTypes = {
  SET_SEARCH_FIELD: '[Search] Set Search Field',

  SEARCH: '[Search] Search',
  SEARCH_SUCCESS: '[Search] Search Success',
  SEARCH_FAILURE: '[Search] Search Failure',

  SEARCH_NEXT: '[Search] Search Next',
  SEARCH_NEXT_SUCCESS: '[Search] Search Next Success',
  SEARCH_NEXT_FAILURE: '[Search] Search Next Failure',

  SET_SELECT_BOOK: '[Search] Set Selected Book',

  SHIFT_BOOK_RESULTS: '[Search] Shift Book Results',

  RATING_STEP: '[Search] Rating Step',

  ADD_BOOK: '[Search] Add Book',
  ADD_BOOK_SUCCESS: '[Search] Add Book Success',
  ADD_BOOK_FAILURE: '[Search] Add Book Failure'
};

export {myShelfActionTypes, searchActionTypes};
