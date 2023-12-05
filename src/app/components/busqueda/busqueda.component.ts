import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,  } from '@angular/router';
import { FormsModule} from '@angular/forms';



import { PropertiesService } from '../../services/properties/properties.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})

export class BusquedaComponent implements OnInit{
  propiedades: any[] = [];
  tituloBusqueda: string = '';

  constructor(private propertiesService: PropertiesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
    const state = window.history.state;
    if (state && state.titulo) {
      this.tituloBusqueda = state.titulo;
    }
      console.log(state)
    };


  buscarPropiedades(): void {
    this.propertiesService.getPropertyByTitle(this.tituloBusqueda)
      .subscribe(
        (resultados) => {
          // Manejar los resultados de la búsqueda
          console.log('Propiedades encontradas:', resultados);

          // Navegar a la página de resultados con los resultados de la búsqueda
          this.router.navigate(['/titulo/search'], { state: { resultados } });
        },
        (error) => {
          // Manejar el error
          console.error('Error al buscar propiedades por título', error);
        }
      );
  }

  goTo(path: string) {
    this.router.navigate([`${path}`]);
  }
}
