import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authService.isLoggedIn()){
      console.log("Auth-Token added to the call");
      //req = req.clone({setHeaders:{authToken:this.authService.getAuthToken()}})
      console.log(req);
    }   
    return next.handle(req);
  }
}
