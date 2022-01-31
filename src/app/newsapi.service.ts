import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  public url:string;
  private apiKey:string;
  private country;
  public pageSize:number;
  public currentPage = 1;
  constructor(private fetch:HttpClient) {
    this.url = environment.newsApiURL;
    this.apiKey = environment.newsApiKey;
    this.country = environment.country || 'in';
    this.pageSize = environment.pageSize || 10;
   }

   fetchNewsItems(genre:string,page:Number = this.currentPage, pageSize:Number = this.pageSize || 10){
     let endpoint = `${this.url}/top-headlines?country=${this.country}&category=${genre || 'general'}${page?('&page='+page):''}${pageSize?'&pageSize='+pageSize:''}&apiKey=${this.apiKey}`;
     return this.fetch.get<{status:string, articles:[], totalResults:Number}>(endpoint);
   }
}
