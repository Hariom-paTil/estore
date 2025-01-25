import { Injectable } from '@angular/core';
import { categories_ARRAY, } from './sidecatogery/sampledata';
import { CATEGERY } from './sidecatogery/categery';

@Injectable({
  providedIn: 'root'
})
export class CategoreyService {
  
  constructor() { }
  getall_category_values(): CATEGERY[] {
    return categories_ARRAY; //is a array that we story a category value inside like panty,shirt etc
  }


  
}
