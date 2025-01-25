import { Component } from '@angular/core';
//import { CATEGERY } from '../home/cate/categery';
import { CategoreyService } from '../categoreyservices.service';
import { categories_ARRAY } from './sampledata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CATEGERY } from './categery';

@Component({
  selector: 'app-sidecatogery',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sidecatogery.component.html',
  styleUrl: './sidecatogery.component.scss'
})
export class SidecatogeryComponent {
 categories: CATEGERY[]=[]; //is a interface that hold filed like id and name
 constructor(catogeryservice: CategoreyService ){ //"CategoreyService" :-is a class that come from a service file
    this.categories= catogeryservice.getall_category_values();
 }

 getcategories(parentcategories?:number):CATEGERY[]{
  return this.categories.filter((category)=>category.parent_categery_id ===category.parent_categery_id);
 }
}
