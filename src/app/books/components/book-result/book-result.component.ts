import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SetSelectBookAction } from '../../store/actions/selected-book.action';
import { IAppState } from './../../../interfaces/IAppState.interface';
import { authorAnim, coverAnim, titleAnim } from './../../animations/book.animations';
import { IBookResult } from './../../interfaces/IBookSearch.interface';
import { getCurrentSearchBook } from './../../store/selectors/search.selectors';

@Component({
  selector: 'app-book-result',
  templateUrl: './book-result.component.html',
  styleUrls: ['./book-result.component.scss'],
  animations: [
    titleAnim,
    authorAnim,
    coverAnim
  ]
})
export class BookResultComponent implements OnInit {

  current$: Observable<any>;

  currentIndex;

  @Input() book: IBookResult;
  @Input() bookIndex: number;

  @Output() selected: EventEmitter<any> = new EventEmitter();

  get cover() {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.medium
      || this.book.volumeInfo.imageLinks.large
      || this.book.volumeInfo.imageLinks.small
      || this.book.volumeInfo.imageLinks.extraLarge
      || this.book.volumeInfo.imageLinks.thumbnail
      || this.book.volumeInfo.imageLinks.smallThumbnail;
    }
    return 'https://shoesonloose.com/SOL/static/images/notfound_placeholder.svg';
  }

  get state() {
    if (this.bookIndex - this.currentIndex === 0) {
      return 'active';
    }
    return 'inactive';
  }

  get indexDif() {
    const indexDif = this.bookIndex - this.currentIndex;
    if (indexDif === 1 || indexDif === -1) {
      return {'transform': `translate(${(indexDif * 64) - 50}%, -15%)`};
    } else if (indexDif > 1) {
      return {'transform': `translate(${((indexDif + 2) * 32) - 84}%, -15%)`};
    } else if (indexDif < -1) {
      return {'transform': `translate(${((indexDif - 66) * 32) + 84}%, -15%)`};
    }
    return {'transform': 'translate(-50%, -15%)'};
  }

  constructor(
    public store: Store<IAppState>
  ) {
    this.current$ = this.store.select(getCurrentSearchBook);
    this.current$.subscribe(res => {
      this.currentIndex = res.index;
      console.log(this.currentIndex);
    });
  }

  ngOnInit() {
  }

  onSelect() {
    this.selected.emit();
    this.store.dispatch(new SetSelectBookAction(this.book));
  }

}
