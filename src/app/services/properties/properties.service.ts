import { Injectable } from '@angular/core';
import axiosClient from '../../../config/axios';
import { Properties } from '../../models/properties';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }

  async getProperties(){
    try {
      const res = await axiosClient.get('/properties')
      console.log(res)
    } catch (error) {
      console.log("Error al obtener las propiedades: ", error)
    }
  }

  async postProperties(){
    try {
      const res = await axiosClient.patch('/properties')
      console.log(res)
    } catch (error) {
      console.error("Error al postear la propiedad: ", error)
    }
  }
}
