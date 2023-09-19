import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyModel } from '../../models/property-model';
import { property } from '../../data/property-data'

@Component({
  selector: 'app-property-page-detail',
  templateUrl: './property-page-detail.component.html',
  styleUrls: ['./property-page-detail.component.css']
})
export class PropertyPageDetailComponent {
  propertyID!: number;
  property: PropertyModel | undefined;

  propertyName: string = '';
  propertyEmail: string = '';
  propertyTel: string = '';

  constructor(public route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString) {
        this.propertyID = parseInt(idString, 10);
        this.fetchPropertyDetails();
      } else {
        console.error('Product ID not provided.');
      }
    });
  }

  fetchPropertyDetails(): void {
    this.property = property.find(product => product.id === this.propertyID);
    if (!this.property) {
      console.log('Product not found.');
    }
  }
}
