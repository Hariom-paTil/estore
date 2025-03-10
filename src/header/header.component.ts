import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch,faUserCircle,faHeart,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../app/services/categories.storeitem';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
faSearch = faSearch;
faUserCircle= faUserCircle;
faHeart= faHeart;
faShoppingCart=faShoppingCart;

constructor(public storeitem: CategoriesStoreItem){

}
}
