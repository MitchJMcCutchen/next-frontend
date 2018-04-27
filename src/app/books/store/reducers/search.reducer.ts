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
    bookId: ''
  }
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
    case actionTypes.SEARCH_SUCCESS: {
      const newState = cloneDeep(state);

      return merge(newState, {
        searchResults: action.value.items,
        currentResult: {
          index: 0,
          bookId: action.value.items[0].id
        }
      });
    }
    default: {
      return state;
    }
  }
}

