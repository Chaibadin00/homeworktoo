import { Component } from '@angular/core';
import { products } from '../data/product-data';
import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  products: ProductModel[] = products;
}
