import { Component, OnInit } from '@angular/core';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { PropertiesService } from '../../services/properties/properties.service';

@Component({
  selector: 'app-agregar-propiedad',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  templateUrl: './agregar-propiedad.component.html',
  styleUrls: ['../../../styles.css']
})
export class AgregarPropiedadComponent implements OnInit {
  propertyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private propertiesService: PropertiesService,
    private router: Router
  ) {
    this.propertyForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      habitaciones: ['', Validators.required],
      estacionamiento: [false],
      wc: ['', Validators.required],
      calle: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
      // Agrega más campos según tus necesidades
    });
  }

  ngOnInit(): void {}

  // onSubmit(): void {
  //   if (this.propertyForm.valid) {
  //     this.propertiesService.postProperties(this.propertyForm.value).then(
  //       (res: any) => {
  //         console.log('Propiedad agregada con éxito:', res);
  //         this.router.navigate(['/propiedades', res.data._id]); // Ajusta el camino de la navegación según tus necesidades
  //       },
  //       (error) => {
  //         console.error('Error al agregar la propiedad:', error);
  //       }
  //     );
  //   }
  // }

  goTo(path: string) {
    this.router.navigate([`${path}`]);
  }
}
