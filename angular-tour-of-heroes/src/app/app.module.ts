import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    //사용하는 component를 계속 적어줘야함
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //ngModel Directive가 포함되어 있음
  ],
  providers: [],
  bootstrap: [AppComponent] //가장 먼저 시작하는 root component를 적어줘야함
})
export class AppModule { }
