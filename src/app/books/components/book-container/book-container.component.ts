import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../../../login/services/auth.service';
import { IAppState } from './../../../interfaces/IAppState.interface';
import { UnsetUserAction } from './../../../login/store/actions/unset-user.action';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router: Router,
    public store: Store<IAppState>
  ) { }

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
