import { Component } from '@angular/core';
import { PRODUCTINTEFACE } from './productallthings/productinteface';
import { ProductserviceService } from './productallthings/productservice.service';
import { CommonModule } from '@angular/common';
import { ProductsStoreItem } from './add_product_store/product_store_item';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {


constructor(public productstore: ProductsStoreItem ){
  
}
 
}
