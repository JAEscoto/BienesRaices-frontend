import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';


import { PropertiesService } from '../../services/properties/properties.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: '../../../styles.css',
})
export class NavbarComponent implements OnInit{
  properties: any[] = [];
  titulo: string = '';


  constructor(private router: Router, private propertiesServices: PropertiesService) {}

  ngOnInit(): void {

  }

  getPropertiesByCategory(categoryId: string) {
      this.propertiesServices.getPropertiesByCategory(categoryId).subscribe(
        (res) =>{
          this.properties = res.data;
          console.log(this.properties)
        },
        (error) => {
          console.error("Error al obtener las propiedades por categoria")
        }
      );
      // console.log(properties);
  }

  goTo(path: string, form: NgForm) {
    this.router.navigate([`${path}`], {state: {titulo: form.value.search}});
  }

  goToUser(path: string) {
    this.router.navigate([`${path}`]);
  }

}
