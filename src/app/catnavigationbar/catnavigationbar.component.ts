import { Component } from '@angular/core';
import { Category } from '../types/Category.type';
import { CategoreyService } from '../sidecatogery/categoreyservices.service';
import { CATEGERY } from '../sidecatogery/categery';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-catnavigationbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catnavigationbar.component.html',
  styleUrl: './catnavigationbar.component.scss'
})
export class CatnavigationbarComponent {
     
  categories: CATEGERY[] = [];
constructor (private categoryService: CategoreyService) {
categoryService.getall_category_values().subscribe((categories) => {
this.categories = categories.filter(
(category) => category.parent_categery_id === null
);
});
}
}
