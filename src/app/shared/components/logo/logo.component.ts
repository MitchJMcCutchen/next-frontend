import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { getCurrentUrl } from '../../../store/selectors/router.selectors';
import { IAppState } from './../../../interfaces/IAppState.interface';
import { booksTitle, logoSquare } from './../../../login/animations/sign-in-logo.animation';
import { getRouterState } from './../../../store/reducers/router.reducer';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: [
    logoSquare,
    booksTitle
  ]
})
export class LogoComponent implements OnInit {

  route$: Observable<any>;

  get url() {
    return this.route$.map(res => {
      if (res) {
        return res.replace('/', '');
      }
    });
  }

  constructor(
    public store: Store<IAppState>
  ) {
    this.route$ = this.store.select(getCurrentUrl);
  }

  ngOnInit() {
  }

}
