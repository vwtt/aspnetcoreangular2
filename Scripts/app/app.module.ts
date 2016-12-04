import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import 'app/lib/rxjs-extensions';

import { AppComponent }        from './components/app.component';
import { DashboardComponent } from './components/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesComponent }     from './components/heroes.component';
import { HeroService }         from './common/services/hero.service';
import { HeroSearchComponent }         from './components/hero-search.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './common/services/in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule
  ],
  declarations: [
    AppComponent,
      DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
      HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
