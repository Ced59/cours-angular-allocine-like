import { Injectable } from '@angular/core';
import { films } from './mock-films-cinemas';
import { Film } from './appInterfaces/film';



@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getAllFilmsByCinema(idCinema): Film[] {
    return films.filter(function(film) {
      return film.cinemas.find(cinema => cinema.id === idCinema) !== undefined;
    });
  }

  get(idFilm): Film {

    return films.find(f => f.id === idFilm);
  }
}
