import { createFeatureSelector } from '@ngrx/store';
import { cloneDeep, merge } from 'lodash';

import { IUserAction } from '../../interfaces/IUserAction.interface';
import { IUserState } from '../../interfaces/IUserState.interface';
import { userActionTypes as actionTypes } from '../actions/action.types';






const INITIAL_STATE: IUserState = {
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  pic: undefined,
};

export function userReducer(
  state: IUserState = INITIAL_STATE,
  action: IUserAction) {
    switch (action.type) {
      case actionTypes.SET_USER: {
        const newState = cloneDeep(state);

        return merge(newState, {
          email: action.email,
          firstName: action.firstName,
          lastName: action.lastName,
          pic: action.pic
        });
      }
      case actionTypes.UNSET_USER: {
        return INITIAL_STATE;
      }
      default: {
        return state;
      }
    }
  }

export const userState = createFeatureSelector<IUserState>('user');
