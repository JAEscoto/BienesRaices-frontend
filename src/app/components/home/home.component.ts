import { Component, Input, OnInit   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

import { PropertiesService } from './../../services/properties/properties.service';
import { PricesService } from '../../services/prices/prices.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { MessagesService } from '../../services/messages/messages.service';
import { Properties } from '../../models/properties';


export const DEFAULT_LAT = 15.50253;
export const DEFAULT_LON =  -88.03195;
export const TITULO = 'Bienes Raices';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MatIconModule, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  prices: any[] = [];
  categories: any[] = [];
  propertiesEnVenta: any[] = [];
  propertiesEnRenta: any[] = [];

  private map:any;
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() titulo: string = TITULO ;

  constructor(
    private propertiesServices: PropertiesService,
    private pricesServices: PricesService,
    private categoriesServices: CategoriesService,
    private messagesServices: MessagesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.initMap();
    this.obtenerPrices();
    this.obtenerCategories();
    this.obtenerPropiedades();
    this.cargarPropiedades();
    }

  private initMap(): void {
    //configuración del mapa
    this.map = L.map('map', {
      center: [this.lat, this.lon],
      attributionControl: false,
      zoom: 12
    });

    //iconos personalizados
    var iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
   L.Marker.prototype.options.icon = iconDefault;

    //titulo
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://1938.com.es">Web Inteligencia Artificial</a>'
    });

    // //marca con pop up
    // const lon = this.lon + 0.009;
    // const lat = this.lat + 0.009;
    // const marker = L.marker([lat + 0.005, lon + 0.005]).bindPopup(this.titulo);
    // marker.addTo(this.map);

    //marca forma de circulo
    // const mark = L.circleMarker([this.lat, this.lon]).addTo(this.map);
    // mark.addTo(this.map);


  //ruta
    // L.Routing.control({
    //   router: L.Routing.osrmv1({
    //     serviceUrl: `https://router.project-osrm.org/route/v1/`
    //   }),
    //   showAlternatives: true,
    //   fitSelectedRoutes: false,
    //   show: false,
    //   routeWhileDragging: true,
    //   waypoints: [
    //     L.latLng(this.lat, this.lon),
    //     L.latLng(lat, lon)
    //   ]
    // }).addTo(this.map);
      tiles.addTo(this.map);

  }

  private agregarMarcador(lat: number, lon: number, titulo: string): void {
    const marker = L.marker([lat, lon]).bindPopup(titulo);
    marker.addTo(this.map);
  }

  async obtenerPropiedades(){
    try {
      this.propertiesEnVenta = await this.propertiesServices.getPropertiesByStatus(true);
      console.log(this.propertiesEnVenta)
      this.propertiesEnRenta = await this.propertiesServices.getPropertiesByStatus(false);
      console.log(this.propertiesEnRenta)
    } catch (error) {
      console.error('Error al obtener propiedades', error);
    }
  }

  private async cargarPropiedades(){
    try {
      const propiedades: Properties[] = await this.propertiesServices.getProperties();
      propiedades.forEach((propiedad) => {
        this.agregarMarcador(propiedad.latitud, propiedad.longitud, propiedad.titulo);
      });
    } catch (error) {
      // Manejar el error según tus necesidades
      console.error('Error al obtener las propiedades con coordenadas', error);
    }
  }

  obtenerPrices() {
    this.pricesServices.getPrices().subscribe(
      (res) => {
        this.prices = res.data;
      },
      (error) => {
        console.error('Error al obtener los precios');
      }
    );
  }

  obtenerCategories() {
    this.categoriesServices.getCategories().subscribe(
      (res) => {
        this.categories = res.data;
      },
      (error) => {
        console.error('Error al obtener las categorias');
      }
    );
  }

  goTo(path: string) {
    this.router.navigate([`${path}`]);
  }
}
