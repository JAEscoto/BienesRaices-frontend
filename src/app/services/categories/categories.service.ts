import { Injectable } from '@angular/core';
import axiosClient from '../../../config/axios';
import { Categories } from '../../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  async getCategories(){
    const res = await axiosClient.get('categories');
    console.log(res)
  }
}
