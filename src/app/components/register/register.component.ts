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
import { Router } from '@angular/router';

import { UsersService } from '../../services/users/users.service';
import { Users } from '../../models/users';

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
    MatNativeDateModule
  ],
  templateUrl: './register.component.html',
  styleUrl: '../../../styles.css'
})

export class RegisterComponent {
  loginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(private fb: FormBuilder, private router: Router, private usersService: UsersService){
    this.loginForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      primerApellido: new FormControl('', [Validators.required]),
      segundoApellido: new FormControl('', [Validators.required]),
      empresa: new FormControl(''),
      fechaNacimiento: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repPassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onSubmit(){
    if (this.loginForm.valid && (this.loginForm.get('password')?.value === this.loginForm.get('repPassword')?.value)) {
      const user: Users = {
        nombre: this.loginForm.get('nombre')?.value,
        primerApellido: this.loginForm.get('primerApellido')?.value,
        segundoApellido: this.loginForm.get('segundoApellido')?.value,
        empresa: this.loginForm.get('empresa')?.value,
        fechaNacimiento: this.loginForm.get('fechaNacimiento')?.value,
        password: this.loginForm.get('password')?.value,
        email: this.loginForm.get('email')?.value,
      }
      this.usersService.postUser(user);
    } else {
      console.log(this.loginForm)
      console.log('Algunos datos son incorrectos. Se le recomienda revisar los password y el email');
    }
  }

  goTo(path: string) {
    this.router.navigate([`${path}`]);
  }
}
