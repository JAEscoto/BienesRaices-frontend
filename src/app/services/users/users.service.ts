import { Injectable } from '@angular/core';
import axiosClient from '../../../config/axios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {}

  async authenticate(data:any) {
    try {
      const res = await axiosClient.post('/users/login', data);
      return res;
    } catch (error) {
      console.error('Error al enviar el usuario:', error);
      return error;
    }
  }

  async postUser(data: any) {
    try {
      const res = await axiosClient.post('/users', data)
      console.log(res)
    } catch (error) {
      console.error('Error al enviar el usuario:', error)
    }
  }

  async confirmarCuenta(token: string): Promise<any> {
    try {
      const res = await axiosClient.get(`/users/confirmar/${token}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error('Error al confirmar la cuenta:', error);
      throw error;
    }
  }

  async resetPassword(email: string | null | undefined){
    try {
      const data = { email };
      const res = await axiosClient.post('/users/reset-password', data);
      console.log(res);
    } catch (error) {
      console.error("Error al enviar el email para nueva password", error);
    }
  }

  async submitResetPassword(password: string | null | undefined, token: string) {
    try {
      const data = { password };
      const res = await axiosClient.post(`/users/reset-password/${token}`, data);
      return res;
    } catch (error) {
      console.error("Error al cambiar password", error);
      throw error;
    }
  }
}
