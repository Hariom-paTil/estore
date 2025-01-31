import { Injectable } from '@angular/core';
import { categories_ARRAY, } from './sidecatogery/sampledata';
import { CATEGERY } from './sidecatogery/categery';
import { HttpClientModule,HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoreyService {
  
  constructor(private httpclient: HttpClient) { }
  getall_category_values(): Observable<CATEGERY[]> {
  return this.httpclient.get<CATEGERY[]>(
    'http://localhost:5001/productcategories'
  );
  }


  
}
