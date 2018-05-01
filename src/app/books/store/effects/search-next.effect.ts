import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap } from 'rxjs/operators';

import { searchActionTypes as actionTypes } from '../actions/action.types';
import { IAppState } from './../../../interfaces/IAppState.interface';
import { BookService } from './../../services/book.service';
import { SearchNextAction } from './../actions/search-next.action';
import { SearchAction } from './../actions/search.action';

@Injectable()
export class SearchNextEffect {
  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private book: BookService
  ) {}

  @Effect() searchNextBooks$: Observable<Action> = this.actions$
    .ofType(actionTypes.SEARCH_NEXT)
    .map((action: SearchNextAction) => ({ ...action }))
    .pipe(
      switchMap((payload) => this.book.searchBooksIndex(payload.searchField, payload.nextIndex)
      .map(res => ({ type: actionTypes.SEARCH_NEXT_SUCCESS, value: res}))
    ));
}
