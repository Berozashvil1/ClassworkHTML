import { Component } from '@angular/core';

interface IUser{
  name:string,
  age:number,
  phone:number|string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  age:number=32

  changeAge(){
    this.age=53
  }
    users:IUser[]=[
      {
        name:"SpiderGela",
        age:43,
        phone:556434363
      },
      {
        name:"SuperGela",
        age:38,
        phone:548888343
      },
      {
        name:"RkinisGela",
        age:56,
        phone:588675465
      }
    ]
}
