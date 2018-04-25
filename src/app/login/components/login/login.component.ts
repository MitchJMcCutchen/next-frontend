import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { confirmPasswordAnim, signUpButtons } from '../../animations/sign-up-field.animation';
import { SetUserAction } from '../../store/actions/set-user.action';
import { IAppState } from './../../../interfaces/IAppState.interface';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    confirmPasswordAnim,
    signUpButtons
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  signUp = false;
  animTrigger = 'inactive';

  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    public router: Router,
    public store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ''
    });
  }

  onLogin() {
    this.auth.login(this.loginForm.value).subscribe(res => {
      this.setLocalStorage(res);
      this.store.dispatch(new SetUserAction(res.body.email, res.body.firstName, res.body.lastName, res.body.profilePic));
    }, (err) => {
      this.loginForm.controls.email.setErrors({invalidCred: 'Invalid credentials'});
    });
  }

  onSignUp() {
    if (this.animTrigger === 'inactive') {
      return this.toggleState();
    } else if (this.loginForm.value.password !== this.loginForm.value.confirmPassword) {
      return this.loginForm.controls.confirmPassword.setErrors({noMatch: 'Your passwords do not match'});
    }
    this.auth.signUp(this.loginForm.value).subscribe(res => {
      this.setLocalStorage(res);
      this.store.dispatch(new SetUserAction(res.body.email, res.body.firstName, res.body.lastName, res.body.profilePic));
    });
  }

  toggleState() {
    this.animTrigger = this.animTrigger === 'active' ? 'inactive' : 'active';
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
