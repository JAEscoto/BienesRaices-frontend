import { Injectable } from '@angular/core';
import axiosClient from '../../../config/axios';
import { Prices } from '../../models/prices';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor() { }

  async getPrices(){
    try {
      const res = await axiosClient.get('/prices');
      console.log(res)
    } catch (error) {
      console.error("Error al obtener los precios")
    }
  }
}
