import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiKey:string;
  isLoggedIn(){
    if(this.apiKey)
      return true;
    else
      return false;
  }

  logIn(){
    this.apiKey = "something";
  }

  logOut(){
    this.apiKey = "";
  }

  getAuthToken(){
    return this.apiKey;
  }

  constructor(private fetch:HttpClient) {
    this.apiKey = "";
   }
}
