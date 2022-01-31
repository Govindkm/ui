import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public constructor(public titleService:Title){}
  public setTitle(title:string){
    this.titleService.setTitle(title);
  }
}
