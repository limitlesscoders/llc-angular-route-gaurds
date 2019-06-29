import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import {UserService} from "../user.service";
import {debounceTime,takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public user:any;
  private componentDestroyed:Subject<any> = new Subject();

  constructor(private router:Router,private service:UserService) {
      this.router.events.subscribe((change)=>{
        if(change instanceof NavigationEnd && this.service.getUserDetails()){
          this.user = this.service.getUserDetails();
        }
      })
    
   }

  ngOnInit() {

  }
}