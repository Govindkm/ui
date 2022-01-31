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
  constructor(private newsApiService:NewsapiService, private route:ActivatedRoute, private spinnerService: NgxSpinnerService) {
    this.articles = [];
    this.spinnerType = 'ball-scale-multiple';
  }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.spinnerService.show();
      this.genre=param['genre'].slice(1);
      this.newsApiService.fetchNewsItems(this.genre).subscribe((res)=>{
        if(res.status == 'ok'){
          this.articles=res.articles;
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
