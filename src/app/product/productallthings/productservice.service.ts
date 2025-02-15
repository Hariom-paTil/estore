import { Injectable } from '@angular/core';
import { PRODUCTINTEFACE } from './productinteface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductserviceService {
  constructor(private httpclinet: HttpClient) { }

  getallproduct(query?: string): Observable <PRODUCTINTEFACE[]> {
    let url: string = 'http://localhost:5001/products';
    if (query) {
      url += '?' + query;
    }
      return this.httpclinet.get<PRODUCTINTEFACE[]>(url);
    
  }

}
