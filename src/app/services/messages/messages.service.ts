import { Injectable } from '@angular/core';
import axiosClient from '../../../config/axios';
import { Messages } from '../../models/messages';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  async getMessages(){
    try {
      const res = await axiosClient.get('messages');
      console.log(res)
    } catch (error) {
      console.error("Error al obtener los mensajes")
    }

  }
}
