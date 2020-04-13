import { Injectable } from '@angular/core';
import { films } from './mock-films-cinemas';
import {Cinema} from './appInterfaces/cinema';
import { Film } from './appInterfaces/film';



@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getAllFilmsByCinema(idCinema): Film[] {
    // tslint:disable-next-line:only-arrow-functions
    return films.filter(function(film) {
      return film.cinemas.find(cinema => cinema.id === idCinema) !== undefined;
    });
  }

  get(idCinema, idFilm): Film {


    return null;
  }
}
