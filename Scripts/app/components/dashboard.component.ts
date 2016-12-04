import { Component, OnInit } from '@angular/core';

import { Hero } from '../domain/hero';
import { HeroService } from '../common/services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: '../../templates/dashboard.component.html',
    styleUrls: [ '../../css/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
