import { Injectable } from '@angular/core';
import axiosClient from '../../../config/axios';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }

  async getProperties(){
    try {
      const res = await axiosClient.get('/properties')
      return res.data; // Retorna todos los datos
    } catch (error) {
      console.log("Error al obtener las propiedades: ", error)
      throw error;
    }
  }

  getPropertyByTitle(titulo: string): Observable<any> {
    const url = `/properties/titulo/search?titulo=${encodeURIComponent(titulo)}`;

    return from(axiosClient.get(url)).pipe(
      catchError((error) => {
        console.error('Error al obtener las propiedades por título', error);
        return throwError(error);
      })
    );
  }

  getPropertiesByCategory(categoryId: string): Observable<any> {
    const url = `/properties/category/${categoryId}`;

    return from(axiosClient.get(url)).pipe(
      catchError((error) => {
        console.error('Error al obtener las propiedades por categoría', error);
        return throwError(error);
      })
    );
  }

  async postProperties(){
    try {
      const res = await axiosClient.patch('/properties')
      console.log(res)
    } catch (error) {
      console.error("Error al postear la propiedad: ", error)
    }
  }

  async getPropertiesByStatus(enVenta: boolean): Promise<any> {
    const url = `/properties/tipo/status?enVenta=${enVenta}`;
    try {
      const res = await axiosClient.get(url);
      return res.data;
    } catch (error) {
      console.error('Error al obtener propiedades por estado de venta', error);
      throw error;
    }
  }

}
