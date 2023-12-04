export class Messages{
  mensaje: string;
  userId: string;
  propertyId: string;

  constructor(mensaje: string, userId: string, propertyId: string){
    this.mensaje = mensaje;
    this.userId = userId;
    this.propertyId = propertyId;
  }
}
