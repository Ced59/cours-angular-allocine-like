import {Injectable} from '@angular/core';
import {Seance} from './appInterfaces/seance';
import {seances} from './mock-seances-film-cinema';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor() {
  }

  getAllSeanceByCinemaByFilm(idCinema, idFilm): Seance[] {

    let seancesFiltered = seances.filter(
      s =>
        s.cinema.id === idCinema
    );

    seancesFiltered = seancesFiltered.filter(
      s =>
        s.film.id === idFilm
    );

    seancesFiltered = seancesFiltered.filter(
      s =>
        moment().isBefore(s.datetime)
    );

    return seancesFiltered.sort((a,b) => moment(a.datetime).isBefore(b.datetime)? -1 : 1); //permet de trier par datetime les séances
  }

  getNbreSeanceByFilmByCinema(idCinema, idFilm) {
    return this.getAllSeanceByCinemaByFilm(idCinema, idFilm).length;
  }
}
