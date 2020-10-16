import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero/hero.service';
import { MessageService } from 'src/app/service/message/message.service';
import { Hero } from '../../interface/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  _hero: Hero = {
    id: 1,
    name: 'Windstorm',
  }

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id is ${hero.id}`)
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
