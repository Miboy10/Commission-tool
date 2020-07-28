import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Router } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent }
    ])
  ]
})
export class AuthModule { }