import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CatnavigationbarComponent } from "../catnavigationbar/catnavigationbar.component";
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { SidecatogeryComponent } from "../sidecatogery/sidecatogery.component";
import { ProductComponent } from "../product/product.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CatnavigationbarComponent, PagenotfoundComponent, SidecatogeryComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
