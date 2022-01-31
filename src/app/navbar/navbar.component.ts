import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input() isLoggedin:boolean = false;

  public mode:string;
  constructor() { 
    if(this.isLoggedin){
      this.mode = 'LogOut';
    }
    else{
      this.mode = 'LogIn';
    }
  }

  ngOnInit(): void {
  }

}
