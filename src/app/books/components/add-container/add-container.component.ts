import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../../interfaces/IAppState.interface';
import { getSearchResults } from '../../store/selectors/search.selectors';
import { addBoxAnim } from './../../animations/add.animations';
import { IBookResult } from './../../interfaces/IBookSearch.interface';
import { OpenSearchAction } from './../../store/actions/open-search.action';
import { ShiftBooksResultAction } from './../../store/actions/shift-book-results.action';
import { ShiftBooksAction } from './../../store/actions/shift-books.action';

@Component({
  selector: 'app-add-container',
  templateUrl: './add-container.component.html',
  styleUrls: ['./add-container.component.scss'],
  animations: [
    addBoxAnim
  ]
})
export class AddContainerComponent implements OnInit {

  state = 'inactive';

  bookResults$: Observable<IBookResult[]>;

  get books() {
    return this.bookResults$;
  }

  constructor(
    public store: Store<IAppState>
  ) {
    this.bookResults$ = this.store.select(getSearchResults);
  }

  ngOnInit() {
  }

  onAdd() {
    this.store.dispatch(new OpenSearchAction());
    this.state = 'search';
  }

  onSearch() {
    this.state = 'show';
  }

  onClose() {
    this.state = 'inactive';
    this.store.dispatch(new ShiftBooksAction(1));
  }

  onNext() {
    this.store.dispatch(new ShiftBooksResultAction(1));
  }

  onPrevious() {
    this.store.dispatch(new ShiftBooksResultAction(-1));
  }

  trackBook(index, book) {
    return book ? book.id : undefined;
  }

}
