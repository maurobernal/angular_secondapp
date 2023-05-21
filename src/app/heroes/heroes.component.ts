import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero | undefined ;

  constructor(private heroService: HeroService, private messageService: MessageService ){}
  
  ngOnInit(): void {
    this.getHeroesObservable();
  }


  onSelectHero(hero: Hero) : void{
    this.selectedHero= hero;
    this.messageService.add(`HeroService: hero selected ${hero.id} from onSelectHero()`);
  }

  getHeroes():void {
    this.heroes = this.heroService.getHeroes();
  }

  getHeroesObservable():void {
    this.heroService.getHeroes$().subscribe( (resp: Hero[]) => this.heroes = resp);
  }

}
