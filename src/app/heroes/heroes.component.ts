//import { Component, OnInit } from '@angular/core';
//import {HeroService} from '../hero.service';
//import { Hero } from '../hero';
//
//
//@Component({
//  selector: 'app-heroes',
//  templateUrl: './heroes.component.html',
//  styleUrls: ['./heroes.component.css']
//})
//export class HeroesComponent implements OnInit {
////  hero : Hero = {
////    id : 1,
////    name : 'Jian Xiong'
////  };
//
//    heroes: Hero[];
////    heroes = HEROES;
////    selectedHero: Hero;
//
////onSelect(hero: Hero): void {
////  this.selectedHero = hero;
////}
//
////  getHeroes(): void {
////  this.heroes = this.heroService.getHeroes();
////}   //a function to retrieve the heroes from the service.
////    
//    
//getHeroes(): void {
//  this.heroService.getHeroes()
//      .subscribe(heroes => this.heroes = heroes);
//}
//    
//
//    
//  constructor(
//    private heroService: HeroService
//    ) { }
//
//  ngOnInit() {
//  this.getHeroes();
//          
//}
//    
//
//}

import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}

