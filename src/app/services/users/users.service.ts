import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axiosClient from '../../../config/axios';
import { Users } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {}

  async postUser(data: any) {
    try {
      const res = await axiosClient.post('/users', data)
      console.log(res)
    // return this.http.post(`${}/users/`, data)
    } catch (error) {
      console.error('Error al enviar el usuario:', error)
    }

  }

  async editUser(id: string, user: Users){
    try {
      const res = await axiosClient.patch(`/users/${id}`, user)
      console.log(res)
    } catch (error) {
      console.error('Error al editar el usuario:', error)
    }

  }
}
