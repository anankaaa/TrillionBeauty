import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.scss'],
})
export class ProductByIdComponent {
  product!: Product;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        productService.get(params['id']).subscribe((serverProduct) => {
          this.product = serverProduct;
        });
    });
  }
}
