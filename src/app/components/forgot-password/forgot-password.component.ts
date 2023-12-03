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
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: '../../../styles.css'
})

export class ForgotPasswordComponent {
  loginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb: FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onSubmit(){
    if (this.loginForm.valid) {

    } else {
      console.log('EL email o el password son incorrectos');
    }
  }

  goTo(path: string) {
    this.router.navigate([`${path}`]);
  }
}
