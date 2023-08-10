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

  currentIndex = 0;

  getCurrentProducts(): ProductModel[] {
    const startIndex = this.currentIndex;
    const endIndex = (startIndex + 3) % this.products.length;
    if (startIndex <= endIndex) {
      return this.products.slice(startIndex, endIndex);
    } else {
      return this.products.slice(startIndex).concat(this.products.slice(0, endIndex));
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
  }
}
