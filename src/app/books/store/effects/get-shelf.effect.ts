import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { myShelfActionTypes as actionTypes } from '../actions/action.types';
import { IAppState } from './../../../interfaces/IAppState.interface';
import { BookService } from './../../services/book.service';

@Injectable()
export class GetMyShelfEffect {

  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private book: BookService
  ) {}

  @Effect() getBooks$: Observable<Action> = this.actions$
    .ofType(actionTypes.GET_MY_SHELF)
    .pipe(() =>  this.book.getMyBooks())
    .map(res => ({ type: actionTypes.GET_MY_SHELF_SUCCESS, value: res }));

}
