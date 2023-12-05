import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UsersService } from '../../services/users/users.service';


@Component({
  selector: 'app-confirmar-cuenta',
  standalone: true,
  imports: [],
  templateUrl: './confirmar-cuenta.component.html',
  styleUrl: './confirmar-cuenta.component.css'
})
export class ConfirmarCuentaComponent implements OnInit{
  mensaje: string = '';

  constructor(private usersServices: UsersService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      const token = params['token'];

      // Lógica para confirmar la cuenta
      try {
        const respuesta = await this.usersServices.confirmarCuenta(token);
        this.mensaje = 'La cuenta se confirmó correctamente.';
        // Puedes hacer más lógica aquí si es necesario
      } catch (error) {
        this.mensaje = 'Hubo un error al confirmar tu cuenta. Intenta de nuevo.';
        // Puedes manejar el error aquí según tus necesidades
      }
    });
  }
}
