import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthenticationService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const path = route.routeConfig?.path;
    if( path == 'register' || path == 'login'){
      if(this.authService.isLoggedIn()){
        this.router.navigate(['/newsboard/general']);
        return false;
      }
      else
        return true;
   }
   if(this.authService.isLoggedIn()){
    console.log('User Authenticated!!!');
    return true;
  }
  else{
    console.log('User is not allowed to access the page');
    this.router.navigate(['/login']);
    return false
  }
  }
}
