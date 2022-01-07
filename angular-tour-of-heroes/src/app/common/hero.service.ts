import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import '../messages/messages.component.css';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { } //service in service
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES); //server로 부터 데이터를 가져오는 것 처럼 simulate 하는 함수
    this.messageService.add('HeroService: fetched heroes');
    //return은 Observable임
    return heroes;
  }
}
