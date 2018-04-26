import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { GetMyShelfEffect } from './books/store/effects/get-shelf.effect';
import { myShelfReducer } from './books/store/reducers/my-shelf.reducer';
import { LoginModule } from './login/login.module';
import { userReducer } from './login/store/reducers/user.reducer';
import { LogoComponent } from './shared/components/logo/logo.component';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { UserInfoComponent } from './shared/components/user-info/user-info.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { LoginGuardService } from './shared/guards/login-guard.service';
import { MaterialModule } from './shared/module/material/material.module';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { CustomSerializer } from './store/reducers/router.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    UserInfoComponent,
    LogoutComponent
  ],
  imports: [
    StoreModule.forRoot({
      router: routerReducer,
      user: userReducer,
      myShelf: myShelfReducer
    }),
    EffectsModule.forRoot([
      GetMyShelfEffect
    ]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AppRoutingModule,
    BooksModule,
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    MaterialModule
  ],
  providers: [
    AuthGuardService,
    LoginGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
