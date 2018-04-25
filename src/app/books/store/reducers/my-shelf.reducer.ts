import { createFeatureSelector } from '@ngrx/store';
import { cloneDeep, merge } from 'lodash';

import { myShelfActionTypes as actionTypes } from '../actions/action.types';
import { IMyShelfAction } from './../../interfaces/IMyShelfAction.interface';
import { IMyShelfState } from './../../interfaces/IMyShelfState.interface';


const INITIAL_STATE: IMyShelfState = {
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
        books: [...action.value],
        loading: false,
        loaded: true
      });
    }
    default: {
      return state;
    }
  }
}

export const myShelfState = createFeatureSelector<IMyShelfState>('myShelf');
