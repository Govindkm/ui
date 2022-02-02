import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from 'src/app/newsapi.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-newsboard',
  templateUrl: './newsboard.component.html',
  styleUrls: ['./newsboard.component.sass']
})
export class NewsboardComponent implements OnInit, OnDestroy {
genre:string = 'general'
spinnerType:string;
  public articles:any;
  public totalResults:Number;
  constructor(private newsApiService:NewsapiService, private route:ActivatedRoute, private spinnerService: NgxSpinnerService) {
    this.articles = [];
    this.spinnerType = 'ball-scale-multiple';
    this.totalResults = 0;
  }

  loadMore(){
    if(this.articles.length >= this.totalResults){
      return;
    }
    else{
      this.spinnerService.show();
      this.newsApiService.fetchNewsItems(this.genre, ++(this.newsApiService.currentPage)).subscribe((res)=>{
        if(res.status == 'ok'){
          console.log(res.articles);
          this.articles.push(...(res.articles));
          this.totalResults = res.totalResults;
          this.spinnerService.hide();
          console.log(this.articles);
        }
        else{
          console.log('Error in api call');
        }
      });
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.spinnerService.show();
      this.genre=param['genre'];
      this.newsApiService.fetchNewsItems(this.genre).subscribe((res)=>{
        if(res.status == 'ok'){
          this.articles=res.articles;
          this.totalResults = res.totalResults;
          this.spinnerService.hide();
        }
        else{
          console.log('Error in api call');
        }
      });
    });
  }

  ngOnDestroy(): void{
    this.articles=[];
  }

}
