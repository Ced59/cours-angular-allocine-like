import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ListCinemasComponent } from './list-cinemas/list-cinemas.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CinemaCardComponent } from './cinema-card/cinema-card.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { SeanceListByCinemaComponent } from './seance-list-by-cinema/seance-list-by-cinema.component';
import { FilmSelectedComponent } from './seance-list-by-cinema/film-selected/film-selected.component';
import { SeancesByFilmInCinemaDisplayComponent } from './seance-list-by-cinema/seances-by-film-in-cinema-display/seances-by-film-in-cinema-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCinemasComponent,
    CinemaListComponent,
    PageNotFoundComponent,
    HomeComponent,
    CinemaCardComponent,
    FilmListComponent,
    FilmInfoComponent,
    SeanceListByCinemaComponent,
    FilmSelectedComponent,
    SeancesByFilmInCinemaDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
