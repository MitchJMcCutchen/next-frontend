import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from './login/services/auth.service';
import { SetUserAction } from './login/store/actions/set-user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public store: Store<any>,
    public auth: AuthService
  ) {
    console.log('app constructor');
    if (this.auth.isAuthenticated()) {
      this.store.dispatch(new SetUserAction(
        localStorage.getItem('email'),
        localStorage.getItem('firstName'),
        localStorage.getItem('lastName'),
        localStorage.getItem('pic')
      ));
    }
  }
}
