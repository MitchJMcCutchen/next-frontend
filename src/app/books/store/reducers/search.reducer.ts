import { createFeatureSelector } from '@ngrx/store';
import { cloneDeep, merge } from 'lodash';

import { ISearchState } from '../../interfaces/ISearchState.interface';
import { searchActionTypes as actionTypes } from '../actions/action.types';
import { IMyShelfAction } from './../../interfaces/IMyShelfAction.interface';
import { IMyShelfState } from './../../interfaces/IMyShelfState.interface';
import { ISearchAction } from './../../interfaces/ISearchAction.interface';


const INITIAL_STATE: ISearchState = {
  searchField: '',
  searchResults: [],
  currentResult: {
    index: -1,
    bookId: '',
    totalItems: 0
  },
  selectedBook: {
    id: '',
    volumeInfo: {},
    step: 'plot',
    rating: {
      plot: null,
      character: null,
      style: null,
      genre: null,
      overall: null
    }
  },
  loading: false,
  loaded: false
};

export function searchReducer(
  state: ISearchState = INITIAL_STATE,
  action: ISearchAction
) {
  switch (action.type) {
    case actionTypes.SET_SEARCH_FIELD: {
      const newState = cloneDeep(state);

      return merge(newState, {
        searchField: action.searchField
      });
    }
    case actionTypes.SEARCH: {
      const newState = cloneDeep(state);

      return merge(newState, {
        loading: true,
        loaded: false
      });
    }
    case actionTypes.SEARCH_SUCCESS: {
      const newState = cloneDeep(state);

      return merge(newState, {
        searchResults: action.value.items,
        currentResult: {
          index: 0,
          bookId: action.value.items[0].id,
          totalItems: action.value.totalItems
        },
        loading: false,
        loaded: true
      });
    }
    case actionTypes.SEARCH_FAILURE: {
      const newState = cloneDeep(state);

      return merge(newState, {
        loading: false,
        loaded: false
      });
    }
    case actionTypes.SEARCH_NEXT: {
      const newState = cloneDeep(state);
      newState.currentResult.index = newState.currentResult.index + 1;

      return merge(newState, {
        loading: true,
        loaded: false
      });
    }
    case actionTypes.SEARCH_NEXT_SUCCESS: {
      const newState = cloneDeep(state);
      newState.searchResults = newState.searchResults.concat(action.value.items);

      return merge(newState, {
        currentResult: {
          bookId: action.value.items[0].id
        },
        loading: false,
        loaded: true
      });
    }
    case actionTypes.SHIFT_BOOK_RESULTS: {
      const newState = cloneDeep(state);
      newState.currentResult.index = newState.currentResult.index + action.moveIndex;
      if (newState.searchResults[newState.currentResult.index]) {
        const book = newState.searchResults[newState.currentResult.index].bookId;

        return merge(newState, {
          currentResult: {
            bookId: book
          }
        });
      } else {
        return state;
      }
    }
    case actionTypes.SET_SELECT_BOOK: {
      const newState = cloneDeep(state);

      return merge(newState, {
        selectedBook: action.book
      });
    }
    case actionTypes.RATING_STEP: {
      const newState = cloneDeep(state);

      return merge(newState, {
        selectedBook: {
          step: action.step,
          ratings: action.ratings
        }
      });
    }
    case actionTypes.ADD_BOOK_SUCCESS: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
}

