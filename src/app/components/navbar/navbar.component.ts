import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { PropertiesService } from '../../services/properties/properties.service';

const ACCOUNT_CIRCLE =
  `
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"
    fill="none" stroke="#000"/>
    <circle cx="12" cy="9.5" r="3.5" fill="none" stroke="#000"/>
    <polyline points="4.5 18.5 7.5 15.5 12 17 16.5 15.5 19.5 18.5" fill="none" stroke="#000"/>
  </svg>
`;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: '../../../styles.css',
})
export class NavbarComponent implements OnInit{
  properties: any[] = [];
  titulo: string = '';
  token: string | null = '';


  constructor(private router: Router, private propertiesServices: PropertiesService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(ACCOUNT_CIRCLE));
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.token = '';
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
