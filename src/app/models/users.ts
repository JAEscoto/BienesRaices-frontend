export class Users{
  _id?: string;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  empresa: string;
  fechaNacimiento: Date;
  password: string;
  email: string;

  constructor(nombre: string, primerApellido: string, segundoApellido: string, empresa: string, fechaNacimiento: Date, password: string, email: string){
      this.nombre = nombre;
      this.primerApellido = primerApellido;
      this.segundoApellido = segundoApellido;
      this.empresa = empresa;
      this.fechaNacimiento = fechaNacimiento;
      this.password = password;
      this.email = email;
  }
}
