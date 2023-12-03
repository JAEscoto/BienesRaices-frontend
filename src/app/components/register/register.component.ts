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

  constructor(private fb: FormBuilder, private router: Router){
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
    if (this.loginForm.valid) {

    } else {
      console.log('EL email o el password son incorrectos');
    }
  }

  // validatePassword(){
  //   if () {

  //   }
  // }

  goTo(path: string) {
    this.router.navigate([`${path}`]);
  }
}
