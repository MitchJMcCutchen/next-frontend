import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap } from 'rxjs/operators';

import { searchActionTypes as actionTypes } from '../actions/action.types';
import { IAppState } from './../../../interfaces/IAppState.interface';
import { BookService } from './../../services/book.service';
import { SearchAction } from './../actions/search.action';

@Injectable()
export class SearchEffect {
  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private book: BookService
  ) {}

  @Effect() searchBooks$: Observable<Action> = this.actions$
    .ofType(actionTypes.SEARCH)
    .map((action: SearchAction) => ({ ...action }))
    .pipe(
      switchMap((payload) => this.book.searchBooks(payload.searchField)
      .map(res => ({ type: actionTypes.SEARCH_SUCCESS, value: res}))
    ));
}
