import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../login/services/auth.service';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onLogOut() {
    this.auth.logout().subscribe(res => {
      if (res.message) {
        this.router.navigate(['/login']);
        localStorage.clear();
      }
    });
  }

}
