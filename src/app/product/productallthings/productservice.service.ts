import { Injectable } from '@angular/core';
import { PRODUCTINTEFACE } from './productinteface';
import { sampleproduct } from './productsamplesdata';

@Injectable({
 providedIn: 'root'
}
)
export class ProductserviceService {
  constructor() { }
   getproductlist(): PRODUCTINTEFACE[] {
    return sampleproduct; //the actual product stor with name,img,value,id
  }
}
