import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../../login/services/auth.service';
import { IAppState } from './../../../interfaces/IAppState.interface';
import { IUser } from './../../../login/interfaces/IUser.interface';
import { getUser } from './../../../login/store/selectors/user.selector';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  showOptions = false;
  user$: Observable<IUser>;

  get user(): Observable<IUser> {
    return this.user$;
  }

  get authorized(): boolean {
    return this.auth.isAuthenticated();
  }

  constructor(
    public auth: AuthService,
    public store: Store<IAppState>
  ) {
    this.user$ = this.store.select(getUser);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  ngOnInit() {
  }

}
