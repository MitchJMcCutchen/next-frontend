import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ShiftBooksAction } from '../../store/actions/shift-books.action';
import { IAppState } from './../../../interfaces/IAppState.interface';
import { GetMyShelfAction } from './../../store/actions/get-my-shelf.action';
import { getBooks, getCurrentBook } from './../../store/selectors/my-shelf.selectors';

@Component({
  selector: 'app-my-shelf',
  templateUrl: './my-shelf.component.html',
  styleUrls: ['./my-shelf.component.scss']
})
export class MyShelfComponent implements OnInit {

  books$: Observable<any>;
  currentIndex$: Observable<any>;

  get books(): Observable<any> {
    return this.books$;
  }

  get index(): Observable<any> {
    return this.currentIndex$.map(current => current.index);
  }

  constructor(
    private store: Store<IAppState>
  ) {
    this.store.dispatch(new GetMyShelfAction());
    this.books$ = this.store.select(getBooks);
    this.currentIndex$ = this.store.select(getCurrentBook);
  }

  ngOnInit() {
  }

  onNext() {
    this.store.dispatch(new ShiftBooksAction(1));
  }

  onPrevious() {
    this.store.dispatch(new ShiftBooksAction(-1));
  }

  trackBook(index, book) {
    return book ? book.id : undefined;
  }

}
