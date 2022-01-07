import { HeroService } from '../common/hero.service';
import { Hero } from '../common/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];
  getHeroes(): void{
    //4개씩 데이터를 잘라서 보여줌
    this.heroService.getHeroes().subscribe(hero_lsit => this.heroes = hero_lsit.slice(1, 5));
  }
}
