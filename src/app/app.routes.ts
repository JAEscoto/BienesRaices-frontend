import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ConfirmarCuentaComponent } from './components/confirmar-cuenta/confirmar-cuenta.component';
import { AvisoConfirmacionComponent } from './components/aviso-confirmacion/aviso-confirmacion.component';
import { AgregarPropiedadComponent } from './components/agregar-propiedad/agregar-propiedad.component';

export const routes: Routes = [
  {path: '', title: 'Bienvendio', component: HomeComponent},
  {path: 'login', title: 'Login', component: LoginComponent},
  {path: 'register', title: 'Register', component: RegisterComponent},
  {path: 'forgotPassword', title: 'Olivdo el password', component: ForgotPasswordComponent},
  {path: 'busqueda', title: 'Buscando Propiedad', component: BusquedaComponent},
  {path: 'confirmar-cuenta/:token', component: ConfirmarCuentaComponent},
  {path: 'aviso-confirmacion', component: AvisoConfirmacionComponent},
  {path: 'agregar-propiedad', component: AgregarPropiedadComponent},
];
