import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
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
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: '../../../styles.css',
})

export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  hide = true;
  error = false;
  errorMessage = "";

  constructor(private router: Router, private userService: UsersService){}

  showPassword(e:any) {
    e.preventDefault();
    this.hide = !this.hide;
  }

  async onSubmit(){
    if (this.loginForm.valid) {
      const data = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      }

      const res: any = await this.userService.authenticate(data);

      if(res?.status === 200) {
        localStorage.setItem('token', res.data.token);
        this.goTo('/');
      } else {
        this.error = true;
        this.errorMessage = res.response.data.msg;
      }
    } else {
      console.log('El email o el password son incorrectos');
    }
  }

  goTo(path: string) {
    this.router.navigate([`${path}`]);
  }
}
