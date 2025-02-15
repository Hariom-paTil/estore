import { Component } from '@angular/core';
import { PRODUCTINTEFACE } from './productallthings/productinteface';
import { ProductserviceService } from './productallthings/productservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
product: PRODUCTINTEFACE[]=[];

constructor(productvariable: ProductserviceService ){
  productvariable.getallproduct().subscribe(product => this.product = product);
}
}
