import { createFeatureSelector } from '@ngrx/store';
import { cloneDeep, merge } from 'lodash';

import { myShelfActionTypes as actionTypes } from '../actions/action.types';
import { IMyShelfAction } from './../../interfaces/IMyShelfAction.interface';
import { IMyShelfState } from './../../interfaces/IMyShelfState.interface';


const INITIAL_STATE: IMyShelfState = {
  current: {
    index: -1,
    id: ''
  },
  books: [],
  loading: true,
  loaded: false
};

export function myShelfReducer(
  state: IMyShelfState = INITIAL_STATE,
  action: IMyShelfAction
) {
  switch (action.type) {
    case actionTypes.GET_MY_SHELF: {
      const newState = cloneDeep(state);

      return merge(newState, {
        loading: true,
        loaded: false
      });
    }
    case actionTypes.GET_MY_SHELF_SUCCESS: {
      const newState = cloneDeep(state);

      return merge(newState, {
        current: {
          index: 0,
          id: action.value[0].bookId
        },
        books: [...action.value],
        loading: false,
        loaded: true
      });
    }
    case actionTypes.SHIFT_BOOKS: {
      const newState = cloneDeep(state);
      newState.current.index = newState.current.index + action.moveIndex;
      if (newState.books[newState.current.index]) {
        const book = newState.books[newState.current.index].bookId;

        return merge(newState, {
          current: {
            id: book
          }
        });
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
}

export const myShelfState = createFeatureSelector<IMyShelfState>('myShelf');
