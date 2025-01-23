import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CatnavigationbarComponent } from "../catnavigationbar/catnavigationbar.component";
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CatnavigationbarComponent,PagenotfoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
