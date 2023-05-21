import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from 'mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }
  getHeroes():Hero[]{
    this.messageService.add('HeroService: fetched heroes from getHeroes()');
    return HEROES;
  }

  getHeroes$(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes from getHeroes$()');
    return heroes;
  }
}
