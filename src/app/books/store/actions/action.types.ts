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

  SHIFT_BOOK_RESULTS: '[Search] Shift Book Results'
};

export {myShelfActionTypes, searchActionTypes};
