import { Component } from '@angular/core';
import { admin } from 'src/app/data/admin-data';
import { AdminModel } from 'src/app/models/admin-model';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {
  admin: AdminModel[] = admin;
}
