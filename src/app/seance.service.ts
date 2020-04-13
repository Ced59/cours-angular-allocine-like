import {Injectable} from '@angular/core';
import {Seance} from './appInterfaces/seance';
import {seances} from './mock-seances-film-cinema';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor() {
  }

  getAllSeanceByCinemaByFilm(idCinema, idFilm): Seance[] {

    const seancesByCinema = seances.filter(
      s =>
        s.cinema.id === idCinema
    );

    return seancesByCinema.filter(
      s =>
        s.film.id === idFilm
    );
  }
}
