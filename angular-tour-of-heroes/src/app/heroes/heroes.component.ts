import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', //이렇게 생긴 태그로 내용을 호출할 수 있음
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() {
    console.log('Heroes Component Constructor called...');
   }
  ngOnInit(): void {
    console.log('Heroes Component ngOnInit() called...')
  }

  // hero: Hero = {
  //   id:1,
  //   name:'Windstorm'
  // };
  // today: number = Date.now();
  heroes = HEROES;
  selectedHero? : Hero;

  onSelect(hero: Hero): void{
    //click을 해야지만 아래 코드가 진행됨
    this.selectedHero = hero;
  }
}
