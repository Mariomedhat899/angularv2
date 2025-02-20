
import { log } from 'console';
import { ProductService } from '../../services/product.service';
import { Component, inject } from '@angular/core';
import { product } from '../../models/product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  allProducts: product[] = [] ;
  private readonly productService =inject(ProductService);

  getAllProducts(): Observable<any> {
    return this.productService.getProducts();
  }

  // ngOnInit(): void {
  //   this.getAllProducts().subscribe({
  //     next: ({data}) => {
  //       this.allProducts = data;
  //   });
  // }
}
