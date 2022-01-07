import { Component, OnInit } from '@angular/core';
import { Hero } from '../common/hero';
import { HeroService } from '../common/hero.service';
import { MessageService } from '../common/message.service';

@Component({
  selector: 'app-heroes', //이렇게 생긴 태그로 내용을 호출할 수 있음
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {
    console.log('Heroes Component Constructor called...');
    console.log("HeroService " + heroService);
   }
  ngOnInit(): void {
    console.log('Heroes Component ngOnInit() called...')
    this.getHeroes();
  }

  getHeroes(): void{
    //this.heroes = this.heroService.getHeroes(); //동기 방식
    //of()와 subscribe()를 사용하여 비동기 방식
    //서비스 구독
    this.heroService.getHeroes().subscribe(hero_list => this.heroes = hero_list);
  }

  // hero: Hero = {
  //   id:1,
  //   name:'Windstorm'
  // };
  // today: number = Date.now();
  //heroes = HEROES;
  selectedHero? : Hero;

  // onSelect(hero: Hero): void{
  //   //click을 해야지만 아래 코드가 진행됨
  //   this.selectedHero = hero;
  //   this.messageService.add( `HeroesComponent: Selected hero id =${hero.id}`)
  // }
}
