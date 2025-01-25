import { Component } from '@angular/core';
import { CATEGERY } from '../home/cate/categery';
import { CategoreyService } from '../categoreyservices.service';

@Component({
  selector: 'app-sidecatogery',
  standalone: true,
  imports: [],
  templateUrl: './sidecatogery.component.html',
  styleUrl: './sidecatogery.component.scss'
})
export class SidecatogeryComponent {
 categories: CATEGERY[]=[]; //is a interface that hold filed like id and name
 constructor(catogeryservice: CategoreyService ){ //"CategoreyService" :-is a class that come from a service file
    this.categories= catogeryservice.getall_category_values();
 }
}
