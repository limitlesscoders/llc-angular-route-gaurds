import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: any[];

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.users = [
      {
        id: "1",
        name: "Marc",
        email: "marc@example.com",
        mobile: "312-123-4566"
      },
      {
        id: "2",
        name: "Steve",
        email: "steve@example.com",
        mobile: "312-123-4567"
      }
    ];
  }

  userDetails(user: any): void {
    this.service.setUserDetails(user);
    this.router.navigate(['users', user.id]);
  }

}