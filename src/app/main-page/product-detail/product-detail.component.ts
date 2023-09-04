import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product-model'; // Import the ProductModel interface
import { products } from '../../data/product-data'; // Import your product data

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId!: number;
  product: ProductModel | undefined;

  userName: string = '';
  userEmail: string = '';
  userTel: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString) {
        this.productId = parseInt(idString, 10);
        this.fetchProductDetails();
      } else {
        console.error('Product ID not provided.');
      }
    });
  }

  fetchProductDetails(): void {
    this.product = products.find(product => product.id === this.productId);
    if (!this.product) {
      console.log('Product not found.');
    }
  }

  onSubmit(): void {
    console.log('User Name:', this.userName);
    console.log('User Email:', this.userEmail);
    console.log('User Telephone:', this.userTel);
  }
}
