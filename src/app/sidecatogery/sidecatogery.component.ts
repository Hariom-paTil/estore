import { Component } from '@angular/core';
//import { CATEGERY } from '../home/cate/categery';
import { CategoreyService } from '../categoreyservices.service';
import { categories_ARRAY } from './sampledata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CATEGERY } from './categery';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sidecatogery',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './sidecatogery.component.html',
  styleUrl: './sidecatogery.component.scss'
})
export class SidecatogeryComponent {
 categories: CATEGERY[]=[]; //is a interface that hold filed like id and name
 constructor(catogeryservice: CategoreyService ){ //"CategoreyService" :-is a class that come from a service file
   catogeryservice.getall_category_values().subscribe((categories)=>{
    this.categories=categories;
   })
 }

 getcategories(parentcategories?: number):CATEGERY[]{
  return this.categories.filter((category)=> parentcategories ? category.parent_categery_id=== parentcategories : category.parent_categery_id === null);
 }
}
