import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  productId!: string | null;
  productDetails: product = {} as product;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (dataUrl) => {
        this.productId = dataUrl.get('id');
        if (this.productId) {
          this.getProductDetails(this.productId);
        }
      },
      error: (err) => {
        console.error('Error fetching product ID from route', err);
      }
    });
  }

  getProductDetails(id: string | null) {
    if (id) {
      this.productService.getProductDetails(id).subscribe({
        next: ({ data }) => {
          this.productDetails = data;
        },
        error: (err) => {
          console.error('Error fetching product details', err);
        }
      });
    }
  }
}
