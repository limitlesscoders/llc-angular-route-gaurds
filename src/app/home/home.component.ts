import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allowedAccess:boolean;
  constructor(private router:Router,private authService:AuthService) {
    this.allowedAccess = this.authService.isRouteAuthenticated();
   }

  ngOnInit() {
  }

  goToUsers():void{
    this.router.navigate(['/users']);
  }

  goToProducts():void{
    this.router.navigate(['/products']);
  }

  allowRouteAccess():void{
    this.authService.setIsAuthenticated(true);
    this.allowedAccess = this.authService.isRouteAuthenticated();
  }
}