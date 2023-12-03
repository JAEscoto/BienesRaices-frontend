import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes: Routes = [
  {path: '', title: 'Bienvendio', component: HomeComponent},
  {path: 'login', title: 'Login', component: LoginComponent},
  {path: 'register', title: 'Register', component: RegisterComponent},
  {path: 'forgotPassword', title: 'Olivdo el password', component: ForgotPasswordComponent}
];
