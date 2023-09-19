import { Component } from '@angular/core';
import { property } from 'src/app/data/property-data';
import { PropertyModel } from 'src/app/models/property-model';

@Component({
  selector: 'app-properties-manage',
  templateUrl: './properties-manage.component.html',
  styleUrls: ['./properties-manage.component.css']
})
export class PropertiesManageComponent {
  properties: PropertyModel[] = property;
}
