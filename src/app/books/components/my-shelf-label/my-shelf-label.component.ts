import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from './../../../interfaces/IAppState.interface';
import { getBooks } from './../../store/selectors';

@Component({
  selector: 'app-my-shelf-label',
  templateUrl: './my-shelf-label.component.html',
  styleUrls: ['./my-shelf-label.component.scss']
})
export class MyShelfLabelComponent implements OnInit {

  books$: Observable<any>;

  get bookLength() {
    return this.books$.map(books => books.length);
  }

  constructor(
    private store: Store<IAppState>
  ) {
    this.books$ = this.store.select(getBooks);
  }

  ngOnInit() {
  }

}
