export class Properties{
  _id?: string;
  userId: string;
  titulo: string;
  descripcion: string;
  habitaciones: Number;
  estacionamiento: Boolean;
  wc: Number;
  calle: string;
  latitud: number;
  longitud: number;
  imagen: string;
  publicado: Boolean;
  enVenta: Boolean;
  categoriaId: string;
  precioId: string;

  constructor(userId: string, titulo: string, descripcion: string, habitaciones: Number, estacionamiento: Boolean, wc: Number, calle: string, latitud: number, longitud: number, imagen: string, publicado: boolean, enVenta: Boolean, categoriaId: string, precioId: string){
    this.userId = userId;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.habitaciones = habitaciones;
    this.estacionamiento = estacionamiento;
    this.wc = wc;
    this.calle = calle;
    this.latitud = latitud;
    this.longitud = longitud;
    this.imagen = imagen;
    this.publicado = publicado;
    this.enVenta = enVenta;
    this.categoriaId = categoriaId;
    this.precioId = precioId;
  }
}
