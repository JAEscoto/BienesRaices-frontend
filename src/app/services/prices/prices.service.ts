import { Injectable } from '@angular/core';
import axiosClient from '../../../config/axios';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor() { }

  getPrices(): Observable<any> {
    return from(axiosClient.get('/prices')).pipe(
      catchError((error) => {
        console.error('Error al obtener los precios', error);
        return throwError(error);
      })
    );
  }
}
