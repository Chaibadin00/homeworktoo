import { Component } from '@angular/core';
import { users } from 'src/app/data/user-data';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent {
  users: UserModel[] = users;
}
