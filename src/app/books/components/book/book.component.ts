import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { authorAnim, coverAnim, titleAnim } from '../../animations/book.animations';
import { getCurrentBook } from '../../store/selectors';
import { IAppState } from './../../../interfaces/IAppState.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  animations: [
    coverAnim,
    titleAnim,
    authorAnim
  ]
})
export class BookComponent implements OnInit {

  current$: Observable<any>;

  currentIndex;

  @Input() book;
  @Input() bookIndex;

  get cover() {
    return this.book.images.medium
    || this.book.images.large
    || this.book.images.small
    || this.book.images.extraLarge
    || this.book.images.thumbnail
    || this.book.images.smallThumbnail;
  }

  get ratings() {
    return this.book.rating;
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
      return {'transform': `translate(${((indexDif + 2) * 32) - 50}%, -15%)`};
    } else if (indexDif < -1) {
      return {'transform': `translate(${((indexDif - 2) * 32) - 50}%, -15%)`};
    }
    return {'transform': 'translate(-50%, -15%)'};
  }

  constructor(
    public store: Store<IAppState>
  ) {
    this.current$ = this.store.select(getCurrentBook);
    this.current$.subscribe(res => this.currentIndex = res.index);
  }

  ngOnInit() {
  }

  onSelect() {
    console.log('selected');
  }

}
