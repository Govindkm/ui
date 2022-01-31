import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.sass']
})
export class NewsCardComponent implements OnInit {
  @Input() article:any;
  public defaultImageUrl:string = 'https://i.ytimg.com/vi/yY0ciWj8oco/maxresdefault.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
