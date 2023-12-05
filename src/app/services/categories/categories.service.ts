import { Injectable } from '@angular/core';
import axiosClient from '../../../config/axios';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories(): Observable<any> {
    return from(axiosClient.get('/categories')).pipe(
      catchError((error) => {
        console.error('Error al obtener las categorías', error);
        return throwError(error);
      })
    );
  }
}
