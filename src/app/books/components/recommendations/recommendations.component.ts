import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../../interfaces/IAppState.interface';
import { getBooks } from './../../store/selectors/my-shelf.selectors';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  myShelf$: Observable<any>;

  get shelfLength() {
    return this.myShelf$.map(books => books.length);
  }

  constructor(
    private store: Store<IAppState>
  ) {
    this.myShelf$ = this.store.select(getBooks);
  }

  ngOnInit() {
  }

}
