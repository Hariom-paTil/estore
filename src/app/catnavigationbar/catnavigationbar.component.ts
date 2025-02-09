import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriesStoreItem } from '../services/categories.storeitem';
@Component({
  selector: 'app-catnavigationbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catnavigationbar.component.html',
  styleUrl: './catnavigationbar.component.scss'
})
export class CatnavigationbarComponent {
     
 
constructor (public categorystore: CategoriesStoreItem ) {


}
}
