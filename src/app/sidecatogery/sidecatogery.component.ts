import { Component } from '@angular/core';
import { categories_ARRAY } from './sampledata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Category } from '../types/Category.type';
import { CategoryServiceService } from '../../app/services/category-service.service';

@Component({
  selector: 'app-sidecatogery',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './sidecatogery.component.html',
  styleUrl: './sidecatogery.component.scss'
})
export class SidecatogeryComponent {
  categories: Category[] = [];
  
  constructor(categoryService: CategoryServiceService) {
    categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(categories);
    });
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter((category) =>
      parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null
    );
  }
//  categories: CATEGERY[]=[]; //is a interface that hold filed like id and name
//  constructor(private catogeryservice: CategoreyService ){ //"CategoreyService" :-is a class that come from a service file
//    catogeryservice.getall_category_values().subscribe((categories)=>{
//     this.categories=categories;
//    })
//  }

//  getcategories(parentcategories?: number):CATEGERY[]{
//   return this.categories.filter((category)=> parentcategories ? category.parent_categery_id=== parentcategories : category.parent_categery_id === null);
//  }
}
