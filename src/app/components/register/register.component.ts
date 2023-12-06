import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users/users.service';
import { Users } from '../../models/users';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  templateUrl: './register.component.html',
  styleUrl: '../../../styles.css'
})

export class RegisterComponent {
  loginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private snackBarServices: SnackbarService
      ){
    this.loginForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repPassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onSubmit(){
    if (this.loginForm.valid && (this.loginForm.get('password')?.value === this.loginForm.get('repPassword')?.value)) {
      const user: Users = {
        nombre: this.loginForm.get('nombre')?.value,
        fechaNacimiento: this.loginForm.get('fechaNacimiento')?.value,
        password: this.loginForm.get('password')?.value,
        email: this.loginForm.get('email')?.value,
      }
      this.usersService.postUser(user);
      this.router.navigate(['/aviso-confirmacion']);
    } else {
      console.log('Algunos datos son incorrectos. Se le recomienda revisar los password y el email');
      this.snackBarServices.mostrarError('Error al registrarse, porfavor verifique que todos los campos esten correctos.');
    }
  }

  goTo(path: string) {
    this.router.navigate([`${path}`]);
  }
}
