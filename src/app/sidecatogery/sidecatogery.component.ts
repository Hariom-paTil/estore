import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CategoriesStoreItem } from '../services/categories.storeitem';
import { CATEGERY } from './categery';
@Component({
  selector: 'app-sidecatogery',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './sidecatogery.component.html',
  styleUrl: './sidecatogery.component.scss'
})
export class SidecatogeryComponent {
  @Output()
subCategoryClicked: EventEmitter<number> = new EventEmitter<number>();
  categories: CATEGERY[] = [];
  subscrption: Subscription= new Subscription();
  constructor(categorystore: CategoriesStoreItem) {
    this.subscrption.add(categorystore.categories_ARRAY$.subscribe((categories)=>{
      this.categories = categories;
    })
  );
  }



  getCategories(parentCategoryId?: number): CATEGERY[] {
    return this.categories.filter((category) =>
      parentCategoryId
        ? category.parent_categery_id === parentCategoryId
        : category.parent_categery_id === null
    );
  }

  onSubCategoryClick (subCategory: CATEGERY): void {
    this.subCategoryClicked.emit(subCategory.id);
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
