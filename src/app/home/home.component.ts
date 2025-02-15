import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CatnavigationbarComponent } from "../catnavigationbar/catnavigationbar.component";
import { ProductComponent } from "../product/product.component";
import { CategoriesStoreItem } from '../services/categories.storeitem';
import { SidecatogeryComponent } from "../sidecatogery/sidecatogery.component";
import { ProductsStoreItem } from '../product/add_product_store/product_store_item';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CatnavigationbarComponent, SidecatogeryComponent, ProductComponent,HttpClientModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[CategoriesStoreItem,ProductsStoreItem]
})
export class HomeComponent {
constructor (private categorystore : CategoriesStoreItem,private productstoreitem: ProductsStoreItem){
  this.categorystore.loadCategories();
  this.productstoreitem.loadProducts();
}
onSelectSubCategory (subCategoryId: number): void {
  this.productstoreitem.loadProducts('subcategoryid=' + subCategoryId);
}
}

