import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from 'src/app/newsapi.service';

@Component({
  selector: 'app-newsboard',
  templateUrl: './newsboard.component.html',
  styleUrls: ['./newsboard.component.sass']
})
export class NewsboardComponent implements OnInit, OnDestroy {
genre:string = 'general'
  public articles:any;
  constructor(private newsApiService:NewsapiService, private route:ActivatedRoute) {
    this.articles = [];
    this.route.params.subscribe((param)=>{
      this.genre=param['genre'].slice(1);
      this.newsApiService.fetchNewsItems(this.genre).subscribe((res)=>{
        if(res.status == 'ok'){
          this.articles=res.articles;
        }
      });
    });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void{
    this.articles=[];
  }

}
