import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [Validators.required, Validators.minLength(5)]);
  password = new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")]);
  constructor(private authService: AuthenticationService, private router:Router) { }
  logIn(): void{
    if(!this.username.invalid && !this.password.invalid){
      console.log("login Clicked");
      console.log(this.username, this.password);
      this.authService.logIn();
      this.router.navigate(['/newsboard/general']);
    }
  }
  ngOnInit(): void {
  }

}
