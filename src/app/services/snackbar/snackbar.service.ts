import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  mostrarError(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar');
  }
}
