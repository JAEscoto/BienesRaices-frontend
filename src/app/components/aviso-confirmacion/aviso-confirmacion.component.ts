import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-aviso-confirmacion',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './aviso-confirmacion.component.html',
  styleUrl: './aviso-confirmacion.component.css'
})
export class AvisoConfirmacionComponent {

  constructor(private router: Router){}

  goTo(path: string) {
    this.router.navigate([`${path}`]);
  }
}
