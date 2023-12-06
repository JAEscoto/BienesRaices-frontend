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
import { CommonModule } from '@angular/common';

import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  loginForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required])
  });
  hidePassword = true;
  hideRepeatPassword = true;
  error = false;
  errorMessage = '';
  token = '';

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.token = window.location.pathname.split('/')[2];
  }

  showPassword(e:any) {
    e.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

  showRepeatPassword(e:any) {
    e.preventDefault();
    this.hideRepeatPassword = !this.hideRepeatPassword;
  }

  async onSubmit() {
    if(this.loginForm.get('password')?.value !== this.loginForm.get('repeatPassword')?.value) {
      this.error = true;
      this.errorMessage = 'Las passwords no son iguales';
    }

    try {
      const res = await this.userService.submitResetPassword(this.loginForm.get('password')?.value, this.token);

      if(res.status === 200) {
        this.goTo('/login');
      }
    } catch (error) {
      console.log(error);
    }
  }

  goTo(path: string) {
    this.router.navigate([`${path}`]);
  }
}
