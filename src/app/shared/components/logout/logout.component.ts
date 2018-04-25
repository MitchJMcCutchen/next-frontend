import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAppState } from './../../../interfaces/IAppState.interface';
import { AuthService } from './../../../login/services/auth.service';
import { UnsetUserAction } from './../../../login/store/actions/unset-user.action';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  @Output()
  closeDialog: EventEmitter<boolean> = new EventEmitter();

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
        this.closeDialog.emit(true);
        this.router.navigate(['/login']);
        localStorage.clear();
        this.store.dispatch(new UnsetUserAction());
      }
    });
  }

  onClose() {
    this.closeDialog.emit(true);
  }
}
