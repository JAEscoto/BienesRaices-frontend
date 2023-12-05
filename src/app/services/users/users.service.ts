import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
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

  async confirmarCuenta(token: string): Promise<any> {
    try {
      const res = await axiosClient.get(`/confirmar-cuenta/${token}`);
      console.log(res.data);
      // Puedes devolver la respuesta si es necesario
      return res.data;
    } catch (error) {
      console.error('Error al confirmar la cuenta:', error);
      throw error; // Puedes lanzar el error para manejarlo en el componente
    }
  }

  async resetPassword(email: string){
    try {
      const res = await axiosClient.post('/users/forgot-password', email)
      console.log(res);
    } catch (error) {
      console.error("Error al enviar el email para nueva password", error)
    }
  }

  // resetPassword(email: string): Observable<any> {
  //   return new Observable((observer) => {
  //     axiosClient.post('/forgot-password', email)
  //       .then((response) => {
  //         observer.next(response.data);
  //         observer.complete();
  //       })
  //       .catch((error) => {
  //         observer.error(error);
  //       });
  //   });
  // }
}
