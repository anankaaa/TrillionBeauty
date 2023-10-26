import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  productList$: Observable<Product[]> = this.productService.getAll();

  products: Product[] = [];
  product: Product = new Product();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
