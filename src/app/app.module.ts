import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { LoginModule } from './login/login.module';
import { userReducer } from './login/store/reducers/user.reducer';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { LoginGuardService } from './shared/guards/login-guard.service';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({
      user: userReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AppRoutingModule,
    BooksModule,
    BrowserModule,
    LoginModule
  ],
  providers: [
    AuthGuardService,
    LoginGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
