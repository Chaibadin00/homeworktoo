import { Component } from '@angular/core';
import { products } from 'src/app/data/product-data';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent {
  products: ProductModel[] = products;
}
