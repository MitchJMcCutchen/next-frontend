import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../../interfaces/IAppState.interface';
import {
  getCurrentSearchBook,
  getSearchField,
  getSearchLoaded,
  getSearchLoading,
  getSearchResults,
} from '../../store/selectors/search.selectors';
import { addBoxAnim, flipContent } from './../../animations/add.animations';
import { IBookResult } from './../../interfaces/IBookSearch.interface';
import { OpenSearchAction } from './../../store/actions/open-search.action';
import { SearchNextAction } from './../../store/actions/search-next.action';
import { ShiftBooksResultAction } from './../../store/actions/shift-book-results.action';
import { ShiftBooksAction } from './../../store/actions/shift-books.action';
import { getBooks } from './../../store/selectors/my-shelf.selectors';
import { getRatingStep } from './../../store/selectors/search.selectors';

@Component({
  selector: 'app-add-container',
  templateUrl: './add-container.component.html',
  styleUrls: ['./add-container.component.scss'],
  animations: [
    addBoxAnim,
    flipContent
  ]
})
export class AddContainerComponent implements OnInit {

  state = 'inactive';
  flipState = 'in';

  currentStep$: Observable<string>;
  bookResults$: Observable<IBookResult[]>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  booksOnShelf$: Observable<any>;

  currentIndex;
  totalItems;
  displayedResults;
  searchField;

  get books() {
    return this.bookResults$;
  }

  constructor(
    public store: Store<IAppState>
  ) {
    this.bookResults$ = this.store.select(getSearchResults);
    this.store.select(getCurrentSearchBook).subscribe(res => {
      this.currentIndex = res.index;
      this.totalItems = res.totalItems;
    });
    this.bookResults$.subscribe(res => this.displayedResults = res.length);
    this.store.select(getSearchField).subscribe(res => this.searchField = res);
    this.loading$ = this.store.select(getSearchLoading);
    this.loaded$ = this.store.select(getSearchLoaded);
    this.currentStep$ = this.store.select(getRatingStep);
    this.booksOnShelf$ = this.store.select(getBooks);
  }

  ngOnInit() {
  }

  onAdd() {
    this.store.dispatch(new OpenSearchAction());
    if (this.displayedResults > 0) {
      this.state = 'search';
      return setTimeout(() => {
        this.state = 'show';
      }, 350);
    }
    this.state = 'search';
  }

  onSearch() {
    this.state = 'show';
  }

  onClose() {
    this.state = 'search';
    setTimeout(() => {
      this.state = 'inactive';
    }, 200);
    this.store.dispatch(new ShiftBooksAction(1));
  }

  onNext() {
    if (this.displayedResults - 1 === this.currentIndex && this.displayedResults < this.totalItems) {
      this.store.dispatch(new SearchNextAction(this.searchField, this.currentIndex + 1));
    }
    this.store.dispatch(new ShiftBooksResultAction(1));
  }

  onPrevious() {
    this.store.dispatch(new ShiftBooksResultAction(-1));
  }

  onSelect() {
    this.state = 'add';
  }

  onComplete() {
    this.state = 'complete';
    setTimeout(() => {
      this.state = 'inactive';
    }, 600);
  }

  trackBook(index, book) {
    return book ? book.id : undefined;
  }

}
