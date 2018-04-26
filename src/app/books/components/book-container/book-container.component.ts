import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../../login/services/auth.service';
import { IAppState } from './../../../interfaces/IAppState.interface';
import { UnsetUserAction } from './../../../login/store/actions/unset-user.action';
import { getBooks } from './../../store/selectors/my-shelf.selectors';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {

  myShelf$: Observable<any>;

  get shelfLength() {
    return this.myShelf$.map(books => books.length);
  }

  constructor(
    public auth: AuthService,
    public router: Router,
    public store: Store<IAppState>
  ) {
    this.myShelf$ = this.store.select(getBooks);
  }

  ngOnInit() {
  }

  onLogOut() {
    this.auth.logout().subscribe(res => {
      if (res.message) {
        this.router.navigate(['/login']);
        localStorage.clear();
        this.store.dispatch(new UnsetUserAction());
      }
    });
  }

}
