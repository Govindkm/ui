import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './container/login/login.component';
import { RegisterComponent } from './container/register/register.component';
import { NewsCardComponent } from './container/newsboard/news-card/news-card.component';
import { NewsboardComponent } from './container/newsboard/newsboard.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    LoginComponent,
    RegisterComponent,
    NewsboardComponent,
    NewsCardComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    InfiniteScrollModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
