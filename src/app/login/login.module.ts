import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from './../shared/module/material/material.module';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { userReducer } from './store/reducers/user.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('user', userReducer),
    CommonModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  providers: [
    AuthService
  ]
})
export class LoginModule { }
