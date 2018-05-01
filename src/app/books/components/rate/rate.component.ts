import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from './../../../interfaces/IAppState.interface';
import { backgroundOpacity, flipContent } from './../../animations/add.animations';
import { IBookResult } from './../../interfaces/IBookSearch.interface';
import { AddBookAction } from './../../store/actions/add-book.action';
import { getRatingStep, getSelectedBook } from './../../store/selectors/search.selectors';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  animations: [
    backgroundOpacity,
    flipContent
  ]
})
export class RateComponent implements OnInit {

  @Output()
  complete: EventEmitter<any> = new EventEmitter();

  state = 'in';

  timeoutTrigger;
  book$: Observable<any>;
  postBook;
  step$: Observable<string>;

  currentStep;

  steps = [
    'plot',
    'characters',
    'style',
    'genre',
    'overall',
    'complete'
  ];

  get book(): Observable<IBookResult> {
    return this.book$;
  }

  get cover() {
    return this.book$.map(book => {
      if (book.volumeInfo.imageLinks) {
        return book.volumeInfo.imageLinks.medium
        || book.volumeInfo.imageLinks.large
        || book.volumeInfo.imageLinks.small
        || book.volumeInfo.imageLinks.extraLarge
        || book.volumeInfo.imageLinks.thumbnail
        || book.volumeInfo.imageLinks.smallThumbnail;
      }
      return 'https://shoesonloose.com/SOL/static/images/notfound_placeholder.svg';
    });
  }

  constructor(
    public store: Store<IAppState>
  ) {
    this.book$ = this.store.select(getSelectedBook);
    this.step$ = this.store.select(getRatingStep);
    this.step$.subscribe(step => this.currentStep = step);
    this.book$.subscribe(book => {
      this.postBook = {
        id: book.id,
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        authors: book.volumeInfo.authors,
        images: book.volumeInfo.imageLinks
      };
    });
  }

  ngOnInit() {
  }

  onAddBook(rating) {
    const bookVal = this.postBook;
    const body = {
      book: bookVal,
      rating,
      review: ''
    };
    this.complete.emit();
    this.timeoutTrigger = setTimeout(() => {
      this.store.dispatch(new AddBookAction(body));
    }, 500);
  }

}
