import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    public router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.auth.login(this.loginForm.value).subscribe(res => this.setLocalStorage(res));
  }

  onSignUp() {
    this.auth.signUp(this.loginForm.value).subscribe(res => this.setLocalStorage(res));
  }

  onLogOut() {
    this.auth.logout().subscribe(res => console.log(res));
    localStorage.clear();
  }

  setLocalStorage(res) {
    localStorage.setItem('token', res.headers.get('x-auth'));
    localStorage.setItem('name', res.body.firstName + ' ' + res.body.lastName);
    localStorage.setItem('pic', res.body.profilePic);
    localStorage.setItem('email', res.body.email);
    this.router.navigate(['/books']);
  }

}
