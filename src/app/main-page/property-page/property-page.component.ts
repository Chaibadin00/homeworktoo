import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { property } from '../../data/property-data'
import { PropertyModel } from '../../models/property-model'

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styleUrls: ['./property-page.component.css']
})
export class PropertyPageComponent {
  Properties: PropertyModel[] = property;

  constructor(private router: Router, private route: ActivatedRoute) {}

  viewPropertyDetail(propertyId: number) {
    this.router.navigate(['/main/property', propertyId]);
  }
}
