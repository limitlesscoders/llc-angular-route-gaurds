
import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.authService.isRouteAuthenticated()){
      return true;
    }
    this.router.navigate["/home"];
    return false;
  }

   canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.authService.isRouteAuthenticated()){
      return true;
    }
    this.router.navigate["/home"];
    return false;
  }
}