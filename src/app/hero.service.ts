import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);}
  
  constructor(
    private messageService: MessageService,
    private http:HttpClient) { }
}
