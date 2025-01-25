import { Injectable } from '@angular/core';
import { CATEGERY } from './home/cate/categery';
import { categories_ARRAY, } from './home/sampledata/sampledata';

@Injectable({
  providedIn: 'root'
})
export class CategoreyService {
  
  constructor() { }
  getall_category_values(): CATEGERY[] {
    return categories_ARRAY; //is a array that we story a category value inside like panty,shirt etc
  }
}
