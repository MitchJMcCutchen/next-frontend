import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ISearchAction } from './../../interfaces/ISearchAction.interface';
import { BookService } from './../../services/book.service';
import { searchActionTypes as actionTypes } from './../actions/action.types';
import { myShelfActionTypes as shelfActionTypes } from './../actions/action.types';
import { SearchAction } from './../actions/search.action';

@Injectable()
export class AddBookEffect {
  constructor(
    private actions$: Actions,
    private book: BookService
  ) {}

  @Effect() addBook$: Observable<Action> = this.actions$
    .ofType(actionTypes.ADD_BOOK)
    .map((action: ISearchAction) => {
      console.log(action);
     return ({ ...action });
    })
    .pipe(
      switchMap(payload => {
        console.log(payload);
        return this.book.addBook(payload.body);
      }),
      switchMap(res => [
        { type: actionTypes.ADD_BOOK_SUCCESS },
        { type: shelfActionTypes.GET_MY_SHELF_SUCCESS, value: res }
      ])
    );
}
