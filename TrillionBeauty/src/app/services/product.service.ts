import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseHttpService<Product> {
  constructor(http: HttpClient) {
    super(http, 'products');
  }
}
