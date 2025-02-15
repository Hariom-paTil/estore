import { Injectable } from '@angular/core';
import { PRODUCTINTEFACE } from './productinteface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
}
)
export class ProductserviceService {
  constructor(private httpclinet: HttpClient) { }
  
  getallproduct(): Observable<PRODUCTINTEFACE[]>{
    return this.httpclinet.get<PRODUCTINTEFACE[]>('http://localhost:5001/products')
  }
 
}
