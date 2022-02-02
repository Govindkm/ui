import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input() isLoggedin:boolean = false;

  public mode:string = "";
  constructor(private authService:AuthenticationService, private router:Router) { 
    this.isLoggedin = this.authService.isLoggedIn();
  }

  collapse(){
    document.getElementById('navbarSupportedContent')?.classList.toggle('show');
  }

  logOut(): void {
    console.log('logout clicked!!!');
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    if(this.isLoggedin){
      this.mode = 'LogOut';
    }
    else{
      this.mode = 'LogIn';
    }
  }

}
