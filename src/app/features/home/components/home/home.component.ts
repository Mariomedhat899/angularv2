import { Component } from '@angular/core';
import { ProductsListComponent } from "../../../products/components/products-list/products-list.component";
import { MainSliderComponent } from "../main-slider/main-slider.component";

@Component({
  selector: 'app-home',
  imports: [ProductsListComponent, MainSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
