import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../interface/hero';
import { HEROES } from '../../mock-heroes';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  //用getter來取HEORES的資料，這裡引用寫死的heroes當作從後端傳來的資料
  //service in service
  //在這個service實做另一個service
  getHeroes(): Observable<Hero[]> {
    //TODO: send message after fetching heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES)
  }
}
